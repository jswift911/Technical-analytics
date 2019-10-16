import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from "components/LoginForm/LoginForm";
import { login } from "actions/auth.action";
import { Loading } from "components/Loading";
import { ErrorField } from "components/ErrorField";
import { Redirect } from "react-router-dom";
import { validatorObj } from "functions/validator";
//TODO убрать глобальную переменную и сделать валидацию на лету
let timer;

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: false,
            errorText: '',
        };
    }

  componentWillUnmount() {
      clearTimeout(timer);
  }

  clearErrors = () => {
      timer = setTimeout(() => {
          this.setState({
              error: false,
              errorText: '',
          });
      }, 3000);
  };

  handleSignIn = (...obj) => {
      const { login } = this.props;
console.log(...obj);
      if (validatorObj.apply(this, [...obj])) {
          login(obj[0].username, obj[0].password);
      }
      this.clearErrors();
  };

  render() {
      const { error, errorText } = this.state;
      const isLoggedIn = this.props.user.hasOwnProperty('token');
      if (isLoggedIn) {
          return <Redirect to={'/'} />
      } else {
          return (
              <Fragment>
                  {this.props.loading ? <Loading/> : <LoginForm handleSignIn={this.handleSignIn}/>}
                  {error && <ErrorField>
                      {errorText}
                  </ErrorField>}
              </Fragment>
          );
      }
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