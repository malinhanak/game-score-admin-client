import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ close }) => {
  return (
    <NavLink to="/" onClick={close}>
      <ion-icon name="home" size="large" />
    </NavLink>
  );
};

export default Header;
