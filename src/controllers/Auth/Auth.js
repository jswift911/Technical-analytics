import style from './Auth.module.css';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from "components/LoginForm/LoginForm";
import { login } from "actions/auth.action";


class Auth extends Component {
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
      const { login } = this.props;

      if (this.validator(username, 'email') && this.validator(password, 'password')) {
          login(username, password);
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

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.error,
        errorText: state.auth.errorText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, pass) => dispatch(login(email, pass)),
    }
}

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);