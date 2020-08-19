import { useState, useContext } from 'react';

import { api } from '../api';
import { GET_TEAMS, GET_ADMINS, CREATE_TEAM } from '../uri';
import { SET_TEAMS, SET_ADMINS } from '../providers/content';
import { Store } from '../providers';

export const useStore = () => {
  const { state, dispatch } = useContext(Store);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getTeams = async () => {
    setIsLoading(true);
    return api
      .get(GET_TEAMS)
      .then(({ data }) => {
        setIsLoading(false);
        dispatch({ type: SET_TEAMS, payload: data });
      })
      .catch((err) => {
        setIsLoading(false);
        const error = `Server svara med ${err.response.status}: ${err.response.data.message}`;
        setError(error);
      });
  };

  const getAdmins = async () => {
    setIsLoading(true);
    return api
      .get(GET_ADMINS)
      .then(({ data }) => {
        setIsLoading(false);
        dispatch({ type: SET_ADMINS, payload: data });
      })
      .catch((err) => {
        setIsLoading(false);
        const error = `Server svara med ${err.response.status}: ${err.response.data.message}`;
        setError(error);
      });
  };

  const createTeams = async (data) => {
    setIsLoading(true);
    return api
      .post(CREATE_TEAM, { ...data })
      .then(({ data }) => {
        setIsLoading(false);
        console.log('OK:', data.message);
      })
      .catch((err) => {
        setIsLoading(false);
        const error = `Server svara med ${err.response.status}: ${err.response.data.message}`;
        console.error(error);
        setError(error);
      });
  };

  return [error, setError, isLoading, getTeams, getAdmins, createTeams];
};
