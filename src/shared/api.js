import axios from 'axios';
import Cookies from 'universal-cookie';

import { year, createSlug } from '../utils/helpers';
import { SERVER_DEV } from './uri';

export const api = axios.create({
  baseURL: SERVER_DEV
});

const cookies = new Cookies();

api.interceptors.request.use(
  (config) => {
    const cookie = cookies.get('sid');
    config.headers['Content-Type'] = 'application/json';
    if (cookie) {
      config.headers.Authorization = `Bearer ${cookie.token}`;
      return config;
    }
    return config;
  },
  (error) => {
    console.error('interceptor errors', error);
    Promise.reject(error);
  }
);

export const GET_SCORE = '/api/teams/get-score';
export const LOGIN_TEAM = '/api/sessions/login-team';
export const GET_NAVLINKS = `/api/game/${year}`;

export const GET_GAME_RULE = (name) => {
  return `/api/game/rules/${createSlug(name)}`;
};
