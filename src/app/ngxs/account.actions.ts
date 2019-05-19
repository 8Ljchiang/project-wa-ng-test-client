export class SetAccount {
  static readonly type = '[account] SET_ACCOUNT';
  constructor(public payload: { roles: string[], status: string }) {}
}

export class UpdateAccountRoles {
  static readonly type = '[account] UPDATE_ACCOUNT_ROLES';
  constructor(public payload: { roles: string[] }) {}
}

export class UpdateAccountStatus {
  static readonly type = '[account] UPDATE_ACCOUNT_STATUS';
  constructor(public payload: { status: string }) {}
}
