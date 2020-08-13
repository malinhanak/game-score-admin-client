import { useState } from 'react';
import { useCookies } from 'react-cookie';

import { api } from '../api';
import { LOGIN } from '../uri';
import { getExpirationDate } from '../../utils/helpers';

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['sid']);
  const [sid, setSid] = useState(cookies?.sid);
  const [isOnline, setIsOnline] = useState(cookies.sid ? true : false);

  const login = async (event, redirect, credentials) => {
    event.preventDefault();

    try {
      const response = await api.post(LOGIN, { ...credentials });
      const admin = response.data;
      await setCookie('sid', JSON.stringify(admin), {
        path: '/',
        expires: getExpirationDate(),
        sameSite: true
      });

      setSid(admin ? admin : null);
      setIsOnline(true);
      redirect.push('/');
    } catch (err) {
      console.error('Login Admin Error', err);
    }

    redirect.push('/');
  };

  const logout = () => {
    removeCookie('sid', { path: '/' });
    setIsOnline(false);
    setSid(null);
  };

  return [sid, isOnline, login, logout];
};
