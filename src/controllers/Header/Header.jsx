import style from './Header.module.css';

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {logout} from "actions/auth.action";
import logo from '../../images/LOGO.png'


class Header extends Component {
  constructor(props) {
    super(props);

  }

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;
    const isLoggedIn = user.hasOwnProperty('token') && user.token;

    return (
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <img src={logo} alt="logo"/>
        </div>
        <div className={style.buttonsWrapper}>
          <Link to={'#'} className={style.btnSignIn}>
            Контакты
          </Link>
           <Link onClick={isLoggedIn && this.handleLogout}
                         to={'/login'}
                 className={style.btnSignIn}>
                  {isLoggedIn ? 'Выйти' : 'Войти'}
           </Link>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);