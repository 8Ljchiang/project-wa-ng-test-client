import { Injectable } from '@angular/core';
import { defaultUserAccount } from '../config/seedData';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getUserAccount(authToken: string) {
    if (authToken) {
      return defaultUserAccount;
    }
    return {};
  }
}
