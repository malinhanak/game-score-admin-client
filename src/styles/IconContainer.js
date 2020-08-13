import React from 'react';
import styled from 'styled-components';

export const Container = ({ classname, children }) => {
  return (
    <IconContainer className={classname}>
      <nav>{children}</nav>
    </IconContainer>
  );
};

const IconContainer = styled.section`
  position: fixed;
  top: 3rem;
  left: 1rem;
  z-index: 25;

  width: 65px;
  height: 60vh;

  border-radius: 50px;

  background-color: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0.8rem;

    a > ion-icon[name='home'] {
      margin: 0;
    }

    ion-icon,
    a {
      margin: 1rem auto;
      color: ${(props) => props.theme.colors.rum};
    }
  }

  a:first-of-type {
    margin-bottom: 2rem;
  }
`;
