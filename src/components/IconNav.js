import React from 'react';

import { Container } from '../styles/IconContainer';
import { Header } from './';

const IconNav = ({ toggleDrawer, isOpen, close, setLinkId }) => {
  const onIconClick = (id) => {
    if (isOpen) {
      return setLinkId(id);
    }
    setLinkId(id);
    toggleDrawer();
  };

  return (
    <Container>
      <Header close={close} />
      <ion-icon
        name="person-outline"
        size="large"
        onClick={() => onIconClick('admin')}
      />
      <ion-icon
        name="people-outline"
        size="large"
        onClick={() => onIconClick('team')}
      />
      <ion-icon
        name="game-controller-outline"
        size="large"
        onClick={() => onIconClick('game')}
      />
    </Container>
  );
};

export default IconNav;
