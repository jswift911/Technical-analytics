import React from 'react';
import {Link} from "react-router-dom";
import {Loading} from "components/Loading";
import {cleanErrors, login} from "actions/auth.action";
import {connect} from "react-redux";

const Main = (props) => {
    const style = {
        margin: '2em auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const linkStyle = {
        color: '#73cff8',
        textDecoration: 'none',
    };
    const { auth } = props;
    const isLoggedIn = auth.user.hasOwnProperty('token');
    return (
        <div style={style}>
            <h2>Добро пожаловать в приложение Technical Analytics</h2>
            {
                !isLoggedIn &&
                <div style={{display: 'inherit', marginTop: '1em'}}>
                    <Link style={linkStyle} to={'/login'}>войдите</Link>
                    <span style={{padding: '0 0.5em 0'}}>или</span>
                    <Link style={linkStyle} to={'/registration'}>зарегистрируйтесь</Link>
                </div>
            }
        </div>
    );
};

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

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);