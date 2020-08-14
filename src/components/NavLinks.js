import React from 'react';
import { NavLink } from 'react-router-dom';

import { Links } from '../styles';

const NavLinks = ({ close, linkId, setLinkId }) => {
  const clearLinks = () => {
    setLinkId('');
    close();
  };

  const getLinks = (id) => {
    switch (id) {
      case 'admin':
        return (
          <>
            <NavLink to={`/admins`} onClick={clearLinks}>
              Administratörer
            </NavLink>
            <NavLink to={`/add-admin`} onClick={clearLinks}>
              Lägg till Admin
            </NavLink>
          </>
        );

      case 'team':
        return (
          <>
            <NavLink to={`/base-score`} onClick={clearLinks}>
              Registrerade Lag
            </NavLink>
            <NavLink to={`/add-team`} onClick={clearLinks}>
              Lägg till team
            </NavLink>
            <NavLink to={`/base-score`} onClick={clearLinks}>
              Skapa start poäng
            </NavLink>
            <NavLink to={`/base-score`} onClick={clearLinks}>
              Registrera poäng
            </NavLink>
          </>
        );

      case 'game':
        return (
          <>
            <NavLink to={`/create-game`} onClick={clearLinks}>
              Registrerade spel
            </NavLink>
            <NavLink to={`/create-game`} onClick={clearLinks}>
              Skapa nytt spel
            </NavLink>
            <NavLink to={`/create-rules`} onClick={clearLinks}>
              Skapa regler
            </NavLink>
            <NavLink to={`/update-rules`} onClick={clearLinks}>
              Uppdatera regler
            </NavLink>
          </>
        );

      default:
        return (
          <NavLink to={`/`} onClick={close}>
            Dashboard
          </NavLink>
        );
    }
  };

  return <Links>{getLinks(linkId)}</Links>;
};

export default NavLinks;
