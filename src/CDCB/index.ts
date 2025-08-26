import axios, { type AxiosError } from 'axios';
import { AnimalQuery, QuerySeachOptions, type Animal, type AnimalLactation, type LactationTestDate, type Login } from './interfaces';

export * from './interfaces';
export default class CDCB {
  server = axios.create({
    baseURL: 'https://webconnect.uscdcb.com/api/',
    adapter: require('axios/lib/adapters/http'),
  });
  private loggingIn?: boolean;
  public accessToken?: string;
  constructor() {
    this.server.interceptors.request.use(async (config) => {
      if (this.accessToken === undefined) {
        if (this.loggingIn) {
          await new Promise<void>(resolve => {
            const interval = setInterval(() => {
              if (!this.loggingIn) {
                clearInterval(interval);
                resolve();
              }
            });
          });
        } else {
          this.loggingIn = true;
          try {
            await this.login();
          } finally {
            this.loggingIn = false;
          }
        }
      }
      if (config.headers === undefined) {
        config.headers = {};
      }
      config.headers['Authorization'] = `Bearer ${this.accessToken}`;
      return config;
    });
    this.server.interceptors.response.use(undefined, async (err: AxiosError) => {
      if (err.response?.status === 403 || err.response?.status === 401) {
        this.accessToken === undefined;
        if (this.loggingIn) {
          await new Promise<void>(resolve => {
            const interval = setInterval(() => {
              if (!this.loggingIn) {
                clearInterval(interval);
                resolve();
              }
            });
          });
        } else {
          this.loggingIn = true;
          try {
            await this.login();
          } finally {
            this.loggingIn = false;
          }
        }
        if (err.request !== undefined && !(err.request._header?.split('\r\n') as string[] | undefined)?.includes('Attempt: 2')) {
          return this.server[(err.request.method as string).toLowerCase()]((err.request.path as string).replace('/api/animals/', '/'), {
            headers: {
              'Attempt': 2,
            },
          });
        }
      }
      return Promise.reject(err);
    });
  }

  async login() {
    const server = axios.create({
      adapter: require('axios/lib/adapters/http'),
    });
    server.interceptors.response.use((response) => {
      this.accessToken = response.data.token;
      return response;
    });
    return (await server.get<Login>('https://webconnect.uscdcb.com/api/auth/public-token',)).data;
  }
  async searchAnimal(normalizeId: string): Promise<Animal | undefined>;
  async searchAnimal(searchType: QuerySeachOptions, query: string | number): Promise<AnimalQuery>;
  async searchAnimal(searchTypeOrNormalizeId: QuerySeachOptions, query?: string | number): Promise<AnimalQuery | Animal | undefined> {
    if (query) {
      return (await this.server.get<AnimalQuery>(`/common/search-animal/${searchTypeOrNormalizeId}/GOAT/${query}/,`)).data;
    } else {
      //get the last 6 characters of the normalizeId
      const shortId = searchTypeOrNormalizeId.slice(-6);
      const animals = (await this.searchAnimal(QuerySeachOptions.ANIM_KEY_6, shortId)).animalLists;
      // Extract all numbers from the input string
      const numericId = extractNumbers(searchTypeOrNormalizeId);
      const animal = animals.find(a => a.animalId.endsWith(numericId));
      return animal;
    }
  }

  async getAnimalLactations(animalId: string, animalKey: string | number): Promise<AnimalLactation[]>;
  async getAnimalLactations(animal: Animal): Promise<AnimalLactation[]>;
  async getAnimalLactations(animalIdOrAnimal: string | Animal, animalKey?: string | number) {
    if (typeof animalIdOrAnimal === 'object') {
      const animal = animalIdOrAnimal as Animal;
      return (await this.server.get<AnimalLactation[]>(`/lactation/get-animal-lactations/${animal.animalId}/${animal.animKey}/1/F/DESC/Queries%20%3E%3E%20Goat%20-%20Lactations`)).data;
    } else {
      return (await this.server.get<AnimalLactation[]>(`/lactation/get-animal-lactations/${animalIdOrAnimal}/${animalKey}/1/F/DESC/Queries%20%3E%3E%20Goat%20-%20Lactations`)).data;
    }
  }
  async getLactationsTestDate(animalId: string, animalKey: string | number, calvPdate: string | number, herdCode: string | number): Promise<LactationTestDate>;
  async getLactationsTestDate(animal: Animal, animalLactation: AnimalLactation): Promise<LactationTestDate>;
  async getLactationsTestDate(animalIdOrAnimal: string | Animal, animalKeyOrLactation: string | number | AnimalLactation, calvPdate?: string | number, herdCode?: string | number) {
    if (typeof animalIdOrAnimal === 'object') {
      const animal = animalIdOrAnimal as Animal;
      const lactation = animalKeyOrLactation as AnimalLactation;
      return (await this.server.get<LactationTestDate>(`/lactation/get-lactations-test-date/${animal.animalId}/${animal.animKey}/1/${animal.sexCode}/${lactation.calvPdate}/${lactation.herdCode}`)).data;
    } else {
      return (await this.server.get<LactationTestDate>(`/lactation/get-lactations-test-date/${animalIdOrAnimal}/${animalKeyOrLactation}/1/F/${calvPdate}/${herdCode}`)).data;
    }
  }
}

// Utility function to extract all numbers from a string
function extractNumbers(str: string): string {
  const match = str.match(/\d+/g);
  return match ? match.join('') : '';
}