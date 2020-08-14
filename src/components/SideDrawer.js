import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { Drawer } from '../styles';

const SideDrawer = ({ close, isOpen, children, setLinkId }) => {
  const closeSidedrawer = () => {
    setLinkId('');
    close();
  };

  const drawer = (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <Drawer>
        <ion-icon
          name="close-outline"
          size="small"
          onClick={closeSidedrawer}
        ></ion-icon>
        {children}
      </Drawer>
    </CSSTransition>
  );
  return ReactDOM.createPortal(drawer, document.getElementById('drawer-hook'));
};

export default SideDrawer;
