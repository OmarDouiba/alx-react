import { createContext } from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export function logOut() {
  console.log('User Logout');
};

const AppContext = createContext({ user: user, logOut: logOut });

export default AppContext;
