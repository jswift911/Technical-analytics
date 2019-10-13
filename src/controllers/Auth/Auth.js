import React, { Component } from 'react';

import {LoginForm} from "components/LoginForm/LoginForm";

export class Auth extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSignIn = () => {
    alert(`login: ${this.state.username}`)
  };

  render() {
    return (
        <LoginForm />
    );
  }
}