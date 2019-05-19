export class SetAccount {
  static readonly type = '[account] SET_ACCOUNT';
  constructor(public payload: { roles: string[], status: string }) {}
}
