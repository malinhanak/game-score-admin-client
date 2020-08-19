import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { cardStyle } from '../../styles/cardStyle';

import { Store } from '../../shared/providers';
import { useFetch } from '../../shared/hooks/useFetch';
import { SET_TEAMS, CLEAR_TEAMS } from '../../shared/providers/content';
import Typography from '../../components/Typography';

const Teams = () => {
  const { dispatch } = useContext(Store);
  const [teams, error, isLoading, clearError] = useFetch(
    `/api/teams/`,
    SET_TEAMS,
    'teams'
  );

  const displayAdmins = teams?.teams.map((team) => {
    return (
      <TeamCard key={team.name}>
        <Typography variant="h3">{team.name}</Typography>
        <Typography variant="p">{team.members.join(', ')}</Typography>
      </TeamCard>
    );
  });

  useEffect(() => {
    return () => {
      clearError(null);
      dispatch({ type: CLEAR_TEAMS });
    };
    // eslint-disable-next-line
  }, []);

  if (isLoading) return 'Laddar administratörer';
  if (error) return error;

  return (
    <Wrapper>
      <Typography variant="h2">Tävlingslag</Typography>
      <section className="teams">{displayAdmins}</section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section.teams {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const TeamCard = styled.section`
  ${cardStyle}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    width: 35%;
    max-width: 276px;

    margin: 1rem 1rem;

    :last-of-type {
      margin-right: auto;
    }
  }
`;

export default Teams;
