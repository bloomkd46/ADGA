import axios, { AxiosError } from 'axios';

import {
  AccountBalance, Awards, CurrentLoginInfo, DirectlyLinkedAccount, Goat, Goats, LinkedAccounts, Login, MembershipDetails, OwnedGoats,
  People, TransferHistory, YearTattoo,
} from './interfaces';


export * from './interfaces';
export default class ADGA {
  public encryptedAccessToken?: string;
  public accessToken?: string;
  private readonly server = axios.create({
    baseURL: 'https://app.adga.org/api/services/',
    headers: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  private id?: number;
  constructor(private username: string, private password: string) {
    this.server.interceptors.request.use(async (config) => {
      if (this.accessToken === undefined) {
        await this.login();
      }
      if (config.headers === undefined) {
        config.headers = {};
      }
      config.headers['Cookie'] = `Adga.AuthToken=${this.accessToken};Adga.TenantId=1;enc_auth_token=${this.encryptedAccessToken}`!;
      config.headers['Authorization'] = `Bearer ${this.accessToken}`;
      return config;
    });
    this.server.interceptors.response.use(undefined, async (err: AxiosError) => {
      if (err.response?.status === 401) {
        this.accessToken === undefined;
        await this.login();
        if (err.request !== undefined && !(err.request._header?.split('\r\n') as string[] | undefined)?.includes('Attempt: 2')) {
          return this.server[(err.request.method as string).toLowerCase()]((err.request.path as string).replace('/api/services/', '/'), {
            headers: {
              'Attempt': 2,
            },
          });
        }
      }
      return Promise.reject(err);
    });
  }

  /*static async init(username: string, password: string) {
    const adga = new ADGA();
    await adga.login(username, password);
    return adga;
  }*/


  async login(): Promise<Login['result']> {
    const server = axios.create();
    server.interceptors.response.use((response) => {
      this.encryptedAccessToken = response.data.result.encryptedAccessToken;
      this.accessToken = response.data.result.accessToken;
      //setTimeout(() => this.accessToken = undefined, (response.data.expireInSeconds - 1) * 1000);
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    });
    return (await server.post('https://app.adga.org/api/TokenAuth/Authenticate',
      JSON.stringify({ userNameOrEmailAddress: this.username, password: this.password }),
      {
        headers: {
          'Accept-Language': 'en-US,en;q=0.9',
          'Content-Type': 'application/json',
          'Cookie': 'Adga.TenantId=1',
        },
      })).data;
  }

  async getCurrentLoginInfo(): Promise<CurrentLoginInfo['result']> {
    const result: CurrentLoginInfo['result'] = (await this.server.get('/app/Session/GetCurrentLoginInformations')).data.result;
    this.id = result.accountProfile.account.id;
    return result;
  }

  async getTattooCode(year: number): Promise<YearTattoo['result']> {
    return (await this.server.get(`/masters/TattooCode/getByYear?Year=${year}`)).data.result;
  }

  async getPrimaryAccountBalance(): Promise<AccountBalance['result']> {
    return (await this.server.get('/finance/Finance/GetPrimaryAccountCurrentBalance')).data.result;
  }

  async getLinkedActiveAccounts(includeCurrentAccount?: false): Promise<LinkedAccounts['result']> {
    return (await this.server.get(`/account/AccountLookup/GetLinkedAccountWithActiveMembershipLookup?includeCurrentLoggedInAccount=${includeCurrentAccount ?? true}`)).data.result;
  }

  async getNotifications(): Promise<Record<string, any>[]> {
    return (await this.server.get('/account/Account/GetUserNotifications')).data.result;
  }

  async getOwnedGoats(id?: number): Promise<OwnedGoats['result']> {
    if (!this.id && !id) {
      await this.getCurrentLoginInfo();
    }
    return (await this.server.get(`/account/AnimalLookup/GetCurrentlyOwnedGoats?accountId=${id ?? this.id}`))
      .data.result;
  }

  async getMembershipDetails(): Promise<MembershipDetails['result']> {
    return (await this.server.get('/account/AccountMembership/GetActiveMembershipDetails')).data.result;
  }

  async getDirectlyLinkedAccounts(id?: number): Promise<DirectlyLinkedAccount['result']> {
    if (!this.id && !id) {
      await this.getCurrentLoginInfo();
    }
    return (await this.server.get(`/account/Account/GetDirectLinkedAccounts?AccountId=${id ?? this.id}`)).data.result;
  }

  async getGoat(id: number): Promise<Goat['result']> {
    return (await this.server.get(`animal/AnimalLookup/get?animalId=${id}`)).data.result;
  }

  async getGoats(ids: number[]): Promise<Goats['result']> {
    if (!ids.length) {
      return { totalCount: 0, items: [] };
    }
    return (await this.server.get(`animal/AnimalLookup/getall?filterExpression=Id in (${ids.join(', ')})`)).data.result;
  }

  async getPeople(name: string): Promise<People['result']> {
    return (await this.server.get(`account/AccountLookup/GetAvailableAccountsForAuthorization?FilterString=${name}`)).data.result;
  }

  async getAwards(id: number): Promise<Awards['result']> {
    return (await this.server.get(`animalaward/AnimalAward/getall?animalId=${id}`)).data.result;
  }
  async getTransferHistory(id: number): Promise<TransferHistory['result']> {
    return (await this.server.get(`animal/TransferHistory/getall?animalId=${id}`)).data.result;
  }
};