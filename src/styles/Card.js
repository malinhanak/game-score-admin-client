import React from 'react';
import styled from 'styled-components';

import { cardStyle } from './cardStyle';
import Typography from '../components/Typography';

export const Card = ({ classname, row, col, title, children }) => {
  return (
    <Styled className={classname} row={row} col={col}>
      <Typography variant="h3" classname="level-3">
        {title}
      </Typography>
      {children}
    </Styled>
  );
};

const Styled = styled.section`
  ${cardStyle}

  display: grid;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.col};
  grid-area: ${(props) => props.area};
`;
