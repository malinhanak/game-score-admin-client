import React from 'react';
import styled from 'styled-components';

export const Brand = ({ classname, year }) => {
  return (
    <Styles className={classname}>
      <h2>{year}</h2>
      <section>
        <h1>tvehöga</h1>
        <h1>kampen</h1>
      </section>
    </Styles>
  );
};

const Styles = styled.section`
  width: 100%;

  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.col};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 1rem 0 0;

  text-transform: uppercase;
  color: ${(props) => props.theme.colors.rum};

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      margin: 0;
      padding: 0;
      font-weight: 900;
      font-size: 2.35rem;
      line-height: 80%;

      :last-of-type {
        font-size: 2.68rem;
      }
    }
  }
  h2 {
    height: 33px;
    font-weight: 900;
    margin: 0;
    margin-right: -1rem;
    padding: 0;
    transform: rotate(90deg);
    font-size: 1.8rem;
  }
`;
