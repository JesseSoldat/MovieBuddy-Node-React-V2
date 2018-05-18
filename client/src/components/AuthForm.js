import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startRegister } from '../actions/auth';

class AuthForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.startRegister('jesse', 'jlab75@jlab.com', 'donttellanyone');
  }

  render() {
    return (
      <div>
        <h1>AuthForm</h1>
        <button onClick={this.onSubmit}>Register</button>
      </div>
    );
  }
}

export default connect(null, { startRegister })(AuthForm);