import { UpdateAccountRoles, UpdateAccountStatus } from './../ngxs/account.actions';
import { AccountStateModel, AccountState } from './../ngxs/account.state';
import { AuthStateModel, AuthState } from './../ngxs/auth.state';
import { Observable } from 'rxjs';
import { Login, Logout, Signup } from './../ngxs/auth.actions';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { userAccountRoles } from '../config/seedData';

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

  @Dispatch()
  signup(info: { username: string, email: string, password: string }) {
    return new Signup(info);
  }

  @Dispatch()
  updateAccountRoles(values: boolean[]) {
    const newRoles = userAccountRoles
      .map(role => role.value)
      .filter((roleValue, index) => {
        if (values[index] === true) {
          return true;
        }
        return false;
      });

    return new UpdateAccountRoles({ roles: newRoles });
  }

  @Dispatch()
  UpdateAccountStatus(status: string) {
    return new UpdateAccountStatus({ status });
  }
}
