import React, { Component } from 'react';

import {LoginForm} from "components/LoginForm/LoginForm";

export class Auth extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSignIn = (u, p) => {
    console.log(u, p);
  };

  render() {
    return (
        <LoginForm handleSignIn={this.handleSignIn}/>
    );
  }
}