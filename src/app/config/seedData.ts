export const userAccountRoles = [
  {
    name: 'Admin',
    value: 'ADMIN'
  },
  {
    name: 'Manager',
    value: 'MANAGER',
  },
  {
    name: 'Basic',
    value: 'BASIC',
  }
];

export const defaultUserAccount = {
  roles: ['ADMIN', 'MANAGER'],
  status: 'ACTIVE',
};

export const fakeAuthToken = 'abc123';

export const localStorageAuthTokenKey = 'authToken';
