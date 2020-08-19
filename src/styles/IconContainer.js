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
  z-index: 40;

  width: 65px;
  height: 60vh;

  border-radius: 50px;

  background-color: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 768px) {
    top: auto;
    bottom: 3rem;
    width: 90%;
    height: 65px;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 0.8rem;

    ion-icon {
      margin: 1rem auto;
      color: ${(props) => props.theme.colors.rum};
    }

    @media screen and (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      ion-icon {
        margin: auto 1rem;
      }
    }
  }

  a:first-of-type {
    margin-bottom: 2rem;
  }
`;
