import { defaultUserAccount } from './../config/seedData';
import { State, Action, StateContext } from '@ngxs/store';
import { Login, Logout, SetAuthToken, Signup } from './auth.actions';
import { fakeAuthToken } from '../config/seedData';
import { SetAccount } from './account.actions';
import { Navigate } from './router.state';

export interface AuthStateModel {
  authToken: string;
  username: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    authToken: '',
    username: '',
  }
}) // Replaces a reducer from NGRX.
export class AuthState {
  @Action(Login)
  login({ patchState, setState, dispatch, getState }: StateContext<AuthStateModel>, { payload }: Login) {
    const { username } = payload;
    // can access current state const state = getState();
    // setState will set the state.
    // dispatch can be called to call other actions from this "reducer".
    patchState({ username, authToken: fakeAuthToken });
    dispatch([
      new SetAccount(defaultUserAccount),
      new Navigate('/auth/profile'),
    ]);
    // await dispatch(new Navigate('/auth/profile'));
  }

  @Action(Logout)
  logout({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: Logout) {
    patchState({
      username: '',
      authToken: '',
    });
    dispatch([
      new SetAccount({ roles: [], status: '' }),
      new Navigate('/'),
    ]);
  }

  @Action(SetAuthToken)
  setAuthToken({ patchState }: StateContext<AuthStateModel>, { payload }: SetAuthToken) {
    const { authToken } = payload;
    patchState({
      authToken
    });
  }

  @Action(Signup)
  signup({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: Signup) {
    dispatch(new Navigate('/index/login'));
  }

}
