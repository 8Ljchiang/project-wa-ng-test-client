import { AccountStateModel, AccountState } from './../ngxs/account.state';
import { AuthStateModel, AuthState } from './../ngxs/auth.state';
import { Observable } from 'rxjs';
import { Login, Logout } from './../ngxs/auth.actions';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFeatureService {

  @Select(AuthState) authState$: Observable<AuthStateModel>;
  @Select(AccountState) accountState$: Observable<AccountStateModel>;

  constructor() { }

  @Dispatch()
  login(credentials: { username: string, password: string }) {
    return new Login(credentials);
  }

  @Dispatch()
  logout() {
    return new Logout({});
  }
}
