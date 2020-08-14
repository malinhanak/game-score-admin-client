import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Store } from '../shared/providers';
import { useFetch } from '../shared/hooks/useFetch';

import { SET_TEAMS, CLEAR_TEAMS } from '../shared/providers/content';

const Teams = () => {
  const { dispatch } = useContext(Store);
  const [teams, error, isLoading, clearError] = useFetch(
    `/api/teams/`,
    SET_TEAMS,
    'teams'
  );

  useEffect(() => {
    return () => {
      clearError(null);
      dispatch({ type: CLEAR_TEAMS });
    };
    // eslint-disable-next-line
  }, []);

  const displayTeams = teams?.teams.map((team) => {
    return (
      <Team key={team.name}>
        <p>{team.name}</p> <p>{team.members.join(', ')}</p>
      </Team>
    );
  });

  if (isLoading) return 'Laddar lag';
  if (error) return error;

  return <Wrapper>{displayTeams}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 1rem 1rem 0.2rem 1rem;
`;

const Team = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-family: 'Roboto', sans-serif;

  width: 100%;
  margin-bottom: 0.4rem;

  :last-of-type {
    margin-bottom: 0;
  }

  p {
    margin: 0;
    padding: 0;

    font-size: 0.7rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.rum};

    :first-of-type {
      width: 40%;
      font-weight: 900;
      color: ${(props) => props.theme.colors.rum};
      text-transform: uppercase;
    }
  }
`;

export default Teams;
