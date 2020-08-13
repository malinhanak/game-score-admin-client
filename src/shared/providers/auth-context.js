import { createContext } from 'react';

export const authContext = createContext({
  id: null,
  name: null,
  isOnline: false,
  role: null,
  login: () => {},
  logout: () => {}
});
