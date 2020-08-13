import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies(['name']);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (cookies.sid) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/auth',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
