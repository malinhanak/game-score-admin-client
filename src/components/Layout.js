import React, { useState } from 'react';
import styled from 'styled-components';
import { Backdrop, SideDrawer, NavLinks, Header, IconNav } from './';

const Layout = ({ children, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
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
      {isOpen && <Backdrop close={closeDrawer} />}
      <Content>{children}</Content>
    </>
  );
};

const Content = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: auto;
`;

export default Layout;
