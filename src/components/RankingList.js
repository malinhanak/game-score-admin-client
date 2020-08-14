import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { compareScores } from '../utils/helpers';
import { Store } from '../shared/providers';
import { useFetch } from '../shared/hooks/useFetch';
import { SET_SCORES, CLEAR_SCORES } from '../shared/providers/content';

const RankingList = () => {
  const { dispatch } = useContext(Store);
  const [scores, error, isLoading, clearError] = useFetch(
    `/api/teams/all-scores`,
    SET_SCORES,
    'scores'
  );

  useEffect(() => {
    return () => {
      clearError(null);
      dispatch({ type: CLEAR_SCORES });
    };
    // eslint-disable-next-line
  }, []);

  const displayRanking = scores?.scores.sort(compareScores).map((rank, i) => {
    const getRank = i + 1;
    return (
      <Rank key={getRank}>
        <span>{getRank}.</span> <p>{rank.team}</p> <p>{rank.scoreTotal} p</p>
      </Rank>
    );
  });
  if (isLoading) return 'Laddar ställning';
  if (error) return error;

  return <Wrapper>{displayRanking}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 1rem 1rem 0.2rem 1rem;
`;

const Rank = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  width: 100%;
  margin-bottom: 0.4rem;

  :last-of-type {
    margin-bottom: 0;
  }

  span,
  p {
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.rum};
  }

  span {
    font-weight: 900;
  }

  p {
    width: 70%;

    margin: 0;
    padding: 0;
  }

  p:nth-child(3) {
    width: 20%;

    font-weight: 900;
    text-align: right;
  }
`;

export default RankingList;
