import React from 'react';
import styled from 'styled-components';

export const Score = ({ classname, title, subtitle }) => {
  return (
    <Styles className={classname}>
      {title}
      <small>{subtitle}</small>
    </Styles>
  );
};

const Styles = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0.5rem auto;
  padding: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.rum};

  small {
    font-size: 30%;
  }
`;
