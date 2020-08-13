import React from 'react';
import { authContext } from './auth-context';
import { useAuth } from '../hooks/useAuth';

const { Provider } = authContext;
const AuthProvider = ({ children }) => {
  const [sid, isOnline, login, logout] = useAuth();
  return (
    <Provider
      value={{
        id: sid?.id,
        name: sid?.name,
        isOnline: isOnline,
        role: sid?.role,
        login,
        logout
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthProvider;
