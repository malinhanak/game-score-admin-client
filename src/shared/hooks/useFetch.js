import { useContext, useState, useEffect } from 'react';

import { api } from '../api';
import { Store } from '../providers';

export const useFetch = (url, DISPATCH_TYPE, stateVar) => {
  const { state, dispatch } = useContext(Store);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    return api
      .get(url)
      .then(({ data }) => {
        setIsLoading(false);
        dispatch({ type: DISPATCH_TYPE, payload: data });
      })
      .catch((err) => {
        setIsLoading(false);
        const error = `Server svara med ${err.response.status}: ${err.response.data.message}`;
        setError(error);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [url]);

  return [state[stateVar], error, isLoading, setError];
};
