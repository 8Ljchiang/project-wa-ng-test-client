import { State, Action, StateContext } from '@ngxs/store';
import { SetAccount } from './account.actions';

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
}
