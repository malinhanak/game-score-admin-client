import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { authContext } from '../shared/providers/auth-context';
import { Backdrop, SideDrawer, NavLinks, Header, IconNav } from './';

const Layout = ({ children, links }) => {
  const auth = useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {auth.isOnline && (
        <>
          <IconNav
            toggleDrawer={toggleDrawer}
            isOpen={isOpen}
            close={closeDrawer}
          />
          {isOpen && (
            <SideDrawer close={closeDrawer} isOpen={isOpen}>
              <NavLinks close={closeDrawer} links={links} />
            </SideDrawer>
          )}
        </>
      )}
      <Content>{children}</Content>
    </>
  );
};

const Content = styled.main`
  width: 80%;
  min-height: 50%;
  display: flex;
  flex-direction: column;

  margin: auto;
`;

export default Layout;
