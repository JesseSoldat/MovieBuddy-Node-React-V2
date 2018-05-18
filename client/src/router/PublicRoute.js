import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  //stateless components pass props here
  isAuth,  
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuth ? ( <h1>You are Logged in</h1>) : 
    ( <Component {...props} /> )
  )}
  />
);

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth._id
});

export default connect(null)(PublicRoute);