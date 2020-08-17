import React from 'react';
import { withRouter } from 'react-router';

const Header = ({ close, history }) => {
  const NavigateAndClose = () => {
    history.push('/');
    close();
  };

  return <ion-icon name="home" size="large" onClick={NavigateAndClose} />;
};

export default withRouter(Header);
