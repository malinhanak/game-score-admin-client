import React from 'react';
import styled from 'styled-components';

import { Card, Brand } from '../styles';
import { RankingList, Teams } from '../components';
import { year } from '../utils/helpers';

const Dashboard = () => {
  return (
    <Wrapper>
      <Brand row="1" col="1 / span 1" year={year} />
      <Card row="1" col="2 / span 2" title="Ställnings lista">
        <RankingList />
      </Card>
      <Card row="2" col="1 / span 3" title="Registrerade lag">
        <Teams />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto 1fr 1fr;
  grid-gap: 1.5rem;
`;

export default Dashboard;
