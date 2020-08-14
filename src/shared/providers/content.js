import React, { useReducer } from 'react';

export const SET_SCORES = 'SET_SCORES';
export const SET_TEAMS = 'SET_TEAMS';
export const SET_ERROR = 'SET_ERROR';

export const CLEAR_TEAMS = 'CLEAR_TEAMS';
export const CLEAR_SCORES = 'CLEAR_SCORES';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const Store = React.createContext();

const initialState = {
  scores: null,
  teams: null,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case SET_SCORES:
      return { ...state, scores: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_TEAMS:
      return { ...state, teams: action.payload };
    case CLEAR_SCORES:
      return { ...state, scores: null };
    case CLEAR_TEAMS:
      return { ...state, teams: null };
    case CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
}

export default function ContentProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
