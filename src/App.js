import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admins from './pages/Admins';
import { ProtectedRoute } from './components/ProtectedRoute';
import Teams from './pages/Teams/Teams';
import CreateTeam from './pages/Teams/Create';

function App() {
  return (
    <Layout>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute exact path="/admins" component={Admins} />
        <ProtectedRoute exact path="/teams" component={Teams} />
        <ProtectedRoute exact path="/add-team" component={CreateTeam} />
        {/* <ProtectedRoute path="/game/:game" component={Game} /> */}
        <Route path="/auth" component={Auth} />
        {/* <Route path="*" component={Page404} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
