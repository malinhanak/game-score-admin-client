import React from 'react';

const Header = ({ toggleDrawer, isOpen }) => {
  return (
    <>
      {!isOpen ? (
        <ion-icon
          name="menu-outline"
          size="large"
          onClick={toggleDrawer}
        ></ion-icon>
      ) : (
        <ion-icon
          name="close-outline"
          size="large"
          onClick={toggleDrawer}
        ></ion-icon>
      )}
    </>
  );
};

export default Header;
