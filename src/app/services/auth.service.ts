import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getQueryValue } from '@angular/core/src/view/query';

const storageKey = 'isAuthenticated';
const fakeAuthToken = 'abc123';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSource = new BehaviorSubject<string>('');
  userToken = this.tokenSource.asObservable();

  constructor() { }

  login(credentials: any) {
    // Make api authentication call here.
    // Get response, check and if valid store token.
    const authStorage = { jwt: fakeAuthToken };
    const response = {
      data: authStorage,
      errors: [],
    };

    this.tokenSource.next(response.data.jwt);
    localStorage.setItem(storageKey, JSON.stringify(response.data));
  }

  logout() {
    this.tokenSource.next('');
    localStorage.removeItem(storageKey);
  }

  getUserTokenAsObservable() {
    return this.userToken;
    // const authStorage = JSON.parse(localStorage.getItem(this.storageKey));
    // if (authStorage) {
    //   const isAuthenticated = authStorage.jwt === this.fakeAuthToken ? true : false;
    //   this.userToken = authStorage.jwt;
    // }
    // return of(this.userToken);
  }

  isLoggedIn() {
    const token = this.tokenSource.getValue();
    return token === fakeAuthToken;
  }
}
