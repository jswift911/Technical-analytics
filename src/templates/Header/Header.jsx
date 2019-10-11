import style from './Header.module.css';
import '../../assets/App.module.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


export class Header extends Component {
  constructor(props) {
    super(props);

  }

  handleLogin = () => {
    const { logout, isLoggedIn } = this.props;
    if (isLoggedIn) {
      // logout();
    }
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <header className={style.header}>
        <div>LOGO</div>
        <div className={style.buttonsWrapper}>
          <Link onClick={this.handleLogin} to={isLoggedIn ? '/' : '/login'} className={style.btnSignIn}>
            {isLoggedIn ? 'Sign out' : 'Sign in'}
          </Link>
          <Link onClick={this.handleLogin} to={isLoggedIn ? '/' : '/login'} className={style.btnSignIn}>
            Sign up
          </Link>
        </div>
      </header>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     token: state.user.token,
//     loading: state.user.loading,
//     isLoggedIn: state.user.isLoggedIn,
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     // logout: () => dispatch(logout()),
//   }
// }
//
// export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);