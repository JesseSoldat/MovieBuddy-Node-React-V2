import React from "react";

import PrivateRoute from "../PrivateRoute";
import Match from "../../pages/match/Match";

const matchRoutes = [
  <PrivateRoute key="match" path="/match" component={Match} exact />
];

export default matchRoutes;
