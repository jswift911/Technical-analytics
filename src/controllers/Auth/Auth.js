import React, { Component, Fragment } from 'react';

import {LoginForm} from "components/LoginForm/LoginForm";
import { endpoints } from '../../../endpoints'
import style from './Auth.module.css';

export class Auth extends Component {
  state = {
      username: '',
      password: '',
      error: false,
      errorText: '',
  };

  validator = (str, name) => {
      const regExp = /(^\w.*@\w+\.\w)/;

      if (!str) {
          this.setState({
              error: true,
              errorText: `Поле ${name} обязательно для заполнения`,
          });
          return false;
      }
      if (str && name === 'email' && !regExp.test(str)) {
          this.setState({
              error: true,
              errorText: 'Невалидный email',
          });
          return false;
      }
      if (str && name === 'email' && regExp.test(str)) {
          this.setState({
              error: false,
              errorText: '',
          });
          return true;
      }
      if (str && name === 'password' && str.length < 6) {
          this.setState({
              error: true,
              errorText: 'Пароль должен быть не короче 6-ти символов',
          });
          return false;
      }
      return true;
  };

  handleSignIn = (username, password) => {
      if (this.validator(username, 'email') && this.validator(password, 'password')) {
          // const params = new URLSearchParams;
          // params.append('username', username);
          // params.append('password', password);
            fetch(endpoints.auth, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "email": JSON.stringify(username),
                    "password": JSON.stringify(password)
                }
            })
                .then(data => data.json())
                .then(result => console.log(result))
      }

  };

  render() {
      const { error, errorText } = this.state;
      if (error) {
          setTimeout(() => {
              this.setState({
                  error: false,
                  errorText: '',
              });
          }, 3000);
      }
    return (
        <Fragment>
            <LoginForm handleSignIn={this.handleSignIn}/>
            {error && <div className={style.errorField}>
                {errorText}
            </div>}
        </Fragment>
    );
  }
}