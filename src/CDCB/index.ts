import axios, { type AxiosError } from 'axios';
import { AnimalQuery, type Animal, type AnimalLactation, type LactationTestDate, type Login, type QuerySeachOptions } from './interfaces';

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
      if (err.response?.status === 403) {
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
  async searchAnimal(searchType: QuerySeachOptions, query: string | number): Promise<AnimalQuery> {
    return (await this.server.get<AnimalQuery>(`/common/search-animal/${searchType}/GOAT/${query}/,`)).data;
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