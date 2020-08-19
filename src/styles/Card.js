import React from 'react';
import styled from 'styled-components';

import { cardStyle } from './cardStyle';

export const Card = ({ classname, row, col, title, children }) => {
  return (
    <Styled className={classname} row={row} col={col}>
      <h3>{title}</h3>
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
