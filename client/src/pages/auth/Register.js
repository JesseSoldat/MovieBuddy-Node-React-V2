import React from "react";
import { connect } from "react-redux";

import { startRegister } from "../../actions/auth";
import AuthForm from "../../components/AuthForm";

const handleSubmit = form => {
  console.log(form);
};

const Register = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-8 mx-auto">
        <h1 className="text-center mb-3 mt-3 display-4">Register</h1>
        <AuthForm parent="register" handleSubmit={handleSubmit} />
      </div>
    </div>
  </div>
);

export default connect(
  null,
  { startRegister }
)(Register);
