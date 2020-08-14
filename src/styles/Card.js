import React from 'react';
import styled from 'styled-components';

export const Card = ({ classname, row, col, title, children }) => {
  return (
    <Styled className={classname} row={row} col={col}>
      <h3>{title}</h3>
      {children}
    </Styled>
  );
};

const Styled = styled.section`
  width: 100%;

  padding: 1.2rem 1.2rem;
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);

  display: grid;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.col};

  h3 {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.rum};

    margin: 0;
    padding: 0;

    opacity: 0.4;
  }
`;
