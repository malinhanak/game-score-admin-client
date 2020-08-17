import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';

import { authContext } from '../shared/providers/auth-context';
import useOutsideClick from '../shared/hooks/useOutsideClick';
import { SideDrawer, NavLinks, IconNav } from './';

const Layout = ({ children, links }) => {
  const ref = useRef();
  const auth = useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);
  const [linkId, setLinkId] = useState('');

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);
  useOutsideClick(ref, () => {
    closeDrawer();
    setLinkId('');
  });

  return (
    <>
      {auth.isOnline && (
        <Wrapper ref={ref}>
          <IconNav
            toggleDrawer={toggleDrawer}
            isOpen={isOpen}
            close={closeDrawer}
            setLinkId={setLinkId}
          />
          {isOpen && (
            <SideDrawer
              close={closeDrawer}
              isOpen={isOpen}
              setLinkId={setLinkId}
            >
              <NavLinks
                close={closeDrawer}
                linkId={linkId}
                setLinkId={setLinkId}
              />
            </SideDrawer>
          )}
        </Wrapper>
      )}
      <Content>{children}</Content>
    </>
  );
};

const Content = styled.main`
  width: 70%;
  min-height: 50%;
  display: flex;
  flex-direction: column;

  margin: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Wrapper = styled.div``;

export default Layout;
