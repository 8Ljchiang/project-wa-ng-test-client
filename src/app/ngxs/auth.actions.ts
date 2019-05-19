export class Login {
  static readonly type = '[auth] LOGIN';
  constructor(public payload: { username: string, password: string }) {}
}

export class Logout {
  static readonly type = '[auth] LOGOUT';
  constructor(public payload: {}) {}
}

export class SetAuthToken {
  static readonly type = '[auth] SET_AUTH_TOKEN';
  constructor(public payload: { authToken: string }) {}
}

export class Signup {
  static readonly type = '[auth] SIGNUP';
  constructor(public payload: { username: string, email: string, password: string }) {}
}
