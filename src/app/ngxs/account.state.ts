import { State, Action, StateContext } from '@ngxs/store';
import { SetAccount, UpdateAccountRoles, UpdateAccountStatus } from './account.actions';

export interface AccountStateModel {
  roles: string[];
  status: string;
}

@State<AccountStateModel>({
  name: 'account',
  defaults: {
    roles: [],
    status: '',
  }
})
export class AccountState {
  @Action(SetAccount)
  setAccount({ setState }: StateContext<AccountStateModel>, { payload }: SetAccount) {
    const account = payload;
    setState(account);
  }

  @Action(UpdateAccountRoles)
  updateAccountRoles({ patchState }: StateContext<AccountStateModel>, { payload }: UpdateAccountRoles) {
    const { roles } = payload;
    patchState({ roles });
  }

  @Action(UpdateAccountStatus)
  updateAccountStatus({ patchState }: StateContext<AccountStateModel>, { payload }: UpdateAccountStatus) {
    const { status } = payload;
    patchState({ status });
  }
}
