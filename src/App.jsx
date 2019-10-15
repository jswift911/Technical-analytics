import style from './assets/App.module.css'

import React from "react";
import {Switch, Route } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Aside } from "components/Aside";
import { Header } from "controllers/Header";
import { RightAside } from "components/RightAside";
import { AuthContainer } from "controllers/Auth";
import { RegForm }  from "components/RegForm";


export const App = () => (
  <div>
    <Header/>
    <main className={style.gridContainer}>
      <Aside />
      <div className={style.content}>
        <Switch>
          <Route path={'/'} component={AuthContainer} exact />
          <Route path={'/registration'} component={RegForm} exact />
        </Switch>
      </div>
      <RightAside />
    </main>
    <Footer/>
  </div>
);