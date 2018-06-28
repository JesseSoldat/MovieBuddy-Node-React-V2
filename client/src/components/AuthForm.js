import React, { Component } from "react";
import { connect } from "react-redux";

import TextInput from "./inputs/TextInput";

class AuthForm extends Component {
  state = {
    email: "",
    password1: "",
    password2: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  onChange = e => {};

  render() {
    const { email, password1, password2 } = this.state;
    return (
      <form noValidate>
        <TextInput
          placeholder="Email"
          name="email"
          type="email"
          onChange={this.onChange}
          value={email}
        />
        <button onClick={this.onSubmit}>Register</button>
      </form>
    );
  }
}

export default connect(null)(AuthForm);
