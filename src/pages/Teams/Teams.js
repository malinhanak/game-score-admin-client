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
        <Typography variant="h3" classname="level-3">
          {team.name}
        </Typography>
        <Typography variant="p" classname="paragraph">
          {team.members.join(', ')}
        </Typography>
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
      <Typography variant="h2" classname="level-2">
        Tävlingslag
      </Typography>
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

  flex: 1 48%;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    /* width: 46%;
    max-width: 348px; */

    margin: 0 0 1rem 0;

    :nth-child(even) {
      margin-left: 1rem;
    }

    :last-of-type {
      margin-right: auto;
    }
  }
`;

export default Teams;
