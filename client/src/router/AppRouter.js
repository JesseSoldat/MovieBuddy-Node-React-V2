import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';
import RegisterPage from '../pages/RegisterPage';

export const history = createHistory();

const WelcomePage = () => <h1>Routed to Welcome Page</h1>;
const NotFoundPage = () => <h1>Not Found</h1>;

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={WelcomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;