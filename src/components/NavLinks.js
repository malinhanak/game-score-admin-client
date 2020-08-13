import React from 'react';
import { NavLink } from 'react-router-dom';

import { Links } from '../styles';

const NavLinks = ({ close }) => {
  return (
    <Links>
      <NavLink to={`/`} onClick={close}>
        Dashboard
      </NavLink>
    </Links>
  );
};

export default NavLinks;
