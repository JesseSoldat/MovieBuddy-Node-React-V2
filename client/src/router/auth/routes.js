import React from "react";

import PublicRoute from "../PublicRoute";
import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";

const authRoutes = [
  <PublicRoute key="register" to="/register" component={Register} exact />,
  <PublicRoute key="login" to="/login" component={Login} exact />
];

export default authRoutes;
