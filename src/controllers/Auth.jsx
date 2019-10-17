import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from "components/LoginForm/LoginForm";
import {cleanErrors, login} from "actions/auth.action";
import { Loading } from "components/Loading";
import { ErrorField } from "components/ErrorField";
import { Redirect } from "react-router-dom";
import { validator} from "functions/validator";
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
      const { login, cleanErrors } = this.props;
console.log(...obj);
      if (validator.apply(this, [...obj])) {
          login(obj[0].username, obj[0].password);
      }
      this.clearErrors();
      cleanErrors();
  };

  render() {
      const { error, errorText } = this.state;
      const { auth } = this.props;
      const isLoggedIn = auth.user.hasOwnProperty('token');
      if (isLoggedIn) {
          return <Redirect to={'/'} />
      } else {
          return (
              <Fragment>
                  {auth.loading ? <Loading/> : <LoginForm handleSignIn={this.handleSignIn}/>}
                  {error && <ErrorField>{errorText}</ErrorField>}
                  {auth.error && <ErrorField>{auth.errorText}</ErrorField>}
              </Fragment>
          );
      }
  }
}

function mapStateToProps(state) {
    return {
        ...state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, pass) => dispatch(login(email, pass)),
        cleanErrors: () => dispatch(cleanErrors()),
    }
}

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);