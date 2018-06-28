import React, { Component } from "react";
import { connect } from "react-redux";

import TextInput from "../../components/inputs/TextInput";
import isEmail from "../../utils/isEmail";
import isEmpty from "../../utils/isEmpty";
import isMatch from "../../utils/isMatch";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    emailErr: null,
    passwordErr: null
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, emailErr, passwordErr } = this.state;
    return (
      <form noValidate>
        <TextInput
          placeholder="Email"
          name="email"
          type="email"
          onChange={this.onChange}
          value={email}
          error={emailErr}
        />
        <TextInput
          placeholder="Password"
          name="password"
          type="password"
          onChange={this.onChange}
          value={password}
          error={passwordErr}
        />
        <button className="btn btn-primary mt-2" onClick={this.onSubmit}>
          Login
        </button>
      </form>
    );
  }
}

export default connect(null)(LoginForm);
