import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import RegisterPage from "../pages/RegisterPage";
import generalRoutes from "./general/routes";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {generalRoutes}
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
