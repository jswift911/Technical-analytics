import style from './assets/App.module.css'

import React from "react";
import {Switch, Route } from 'react-router-dom';

import { HeaderContainer } from "controllers/Header";
import { AuthContainer } from "controllers/Auth";
import { RegistrationContainer } from "controllers/Registraton";
import { MainContainer } from "components/Main";
import bg from './images/BG.webp'


export const App = () => {
    const contentStyles = {
        backgroundImage: `url(${bg})`,
    };
    return (
        <div className={style.app}>
            <HeaderContainer />
            <main className={style.main} style={contentStyles}>
                <Switch>
                    <Route path={'/'} component={MainContainer} exact />
                    <Route path={'/login'} component={AuthContainer} />
                    <Route path={'/registration'} component={RegistrationContainer} />
                </Switch>
            </main>
        </div>
    );
};