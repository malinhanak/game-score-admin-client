import { createContext } from 'react';

export const storeContext = createContext({
  error: null,
  setError: () => {},
  isLoading: false,
  getTeams: () => {},
  getAdmins: () => {},
  createTeams: () => {}
});
