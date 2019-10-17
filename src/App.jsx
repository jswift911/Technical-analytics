import style from './assets/App.module.css'

import React from "react";
import {Switch, Route } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Aside } from "components/Aside";
import { HeaderContainer } from "controllers/Header";
import { RightAside } from "components/RightAside";
import { AuthContainer } from "controllers/Auth";
import { RegistrationContainer } from "controllers/Registraton";
import { MainContainer } from "components/Main";


export const App = () => (
  <div>
    <HeaderContainer />
    <main className={style.gridContainer}>
      <Aside />
      <div className={style.content}>
        <Switch>
          <Route path={'/'} component={MainContainer} exact />
          <Route path={'/login'} component={AuthContainer} />
          <Route path={'/registration'} component={RegistrationContainer} />
        </Switch>
      </div>
      <RightAside />
    </main>
    <Footer/>
  </div>
);