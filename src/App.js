import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
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
