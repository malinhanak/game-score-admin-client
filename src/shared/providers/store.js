import React from 'react';
import { storeContext } from './store-context';
import { useStore } from '../hooks/useStore';

const { Provider } = storeContext;
const StoreProvider = ({ children }) => {
  const [
    error,
    setError,
    isLoading,
    getTeams,
    getAdmins,
    createTeams
  ] = useStore();
  return (
    <Provider
      value={{
        error,
        setError,
        isLoading,
        getTeams,
        getAdmins,
        createTeams
      }}
    >
      {children}
    </Provider>
  );
};

export default StoreProvider;
