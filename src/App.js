import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { authContext } from './shared/providers/auth-context';
import Layout from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const auth = useContext(authContext);

  useEffect(() => {
    if (auth.isOnline) console.log('Du är eller blev inloggad');
    console.log('Du är eller blev utloggad');
  }, [auth]);

  return (
    <Layout>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        {/* <ProtectedRoute path="/game/:game" component={Game} /> */}
        <Route path="/auth" component={Auth} />
        {/* <Route path="*" component={Page404} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
