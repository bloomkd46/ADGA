import axios, { AxiosInstance } from 'axios';

import {
  AccountBalance, Awards, CurrentLoginInfo, DirectlyLinkedAccount, Goat, Goats, LinkedAccounts, Login, MembershipDetails, OwnedGoats,
  People, YearTattoo,
} from './interfaces';



export * from './interfaces';
export default class ADGA {
  private constructor() {
    //All initialization done in Init();
  }

  static async init(username: string, password: string) {
    const adga = new ADGA();
    await adga.login(username, password);
    return adga;
  }

  private server!: AxiosInstance;
  private id?: number;
  async login(username: string, password: string): Promise<Login['result']> {
    const res: Login = (await axios.post('https://app.adga.org/api/TokenAuth/Authenticate',
      JSON.stringify({ userNameOrEmailAddress: username, password: password }),
      {
        headers: {
          'Accept-Language': 'en-US,en;q=0.9',
          'Content-Type': 'application/json',
          'Cookie': 'Adga.TenantId=1',
        },
      })).data;
    this.server = axios.create({
      baseURL: 'https://app.adga.org/api/services/',
      headers: {
        'Host': 'app.adga.org',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cookie': `Adga.AuthToken=${res.result.accessToken};Adga.TenantId=1;enc_auth_token=${res.result.encryptedAccessToken}`,
        'Connection': 'keep-alive',
        'Adga.TenantId': 1,
        'Accept': '*/*',
        'Referer': 'https://app.adga.org/',
        'Authorization': `Bearer ${res.result.accessToken}`,
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    return res.result;
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
    return (await this.server.get(`animal/AnimalLookup/getall?filterExpression=Id in (${ids.join(', ')})`)).data.result;
  }

  async getPeople(name: string): Promise<People['result']> {
    return (await this.server.get(`account/AccountLookup/GetAvailableAccountsForAuthorization?FilterString=${name}`)).data.result;
  }

  async getAwards(id: number): Promise<Awards['result']> {
    return (await this.server.get(`animalaward/AnimalAward/getall?animalId=${id}`)).data.result;
  }
}