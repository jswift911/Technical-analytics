import style from './Header.module.css';
import 'assets/App.module.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from "actions/auth.action";


class Header extends Component {
  constructor(props) {
    super(props);

  }

  handleLogin = () => {
    const { logout, isLoggedIn } = this.props;
    if (isLoggedIn) {
      // logout();
    }
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;
    const isLoggedIn = user.hasOwnProperty('token');

    return (
      <header className={style.header}>
        <div>LOGO</div>
        <div className={style.buttonsWrapper}>
           <Link onClick={isLoggedIn ? this.handleLogout : this.handleLogin}
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
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);