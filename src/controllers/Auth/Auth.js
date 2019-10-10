import style from './Auth.module.css';

import React, { Component } from 'react';

// import { Button } from '../Button';

export class Auth extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSignIn = () => {
    alert(`login: ${this.state.username}`)
  };

  handleTextChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className={style.loginPage}>
        <div className={style.form}>
          <div className={style.loginForm}>
            <input onChange={this.handleTextChange} name="username" type="text" placeholder="username" value={username} />
            <input onChange={this.handleTextChange} name="password" type="password" placeholder="password" value={password} />
            {/*<Button buttonName="btn login-btn" buttonContent="sign in" handler={this.handleSignIn} />*/}
             <button className={style.loginBtn} onClick={this.handleSignIn}>sign in</button>
          </div>
        </div>
      </div>
    );
  }
}