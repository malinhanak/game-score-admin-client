import React from 'react';

import { Container } from '../styles/IconContainer';
import { Header } from './';

const IconNav = ({ toggleDrawer, isOpen, close }) => {
  return (
    <Container>
      <Header close={close} />
      <ion-icon name="clipboard-outline" size="large" onClick={toggleDrawer} />
      <ion-icon name="person-outline" size="large" onClick={toggleDrawer} />
      <ion-icon name="people-outline" size="large" onClick={toggleDrawer} />
      <ion-icon
        name="game-controller-outline"
        size="large"
        onClick={toggleDrawer}
      />
    </Container>
  );
};

export default IconNav;
