import style from './assets/App.module.css'

import React from "react";
import {Switch, Route } from 'react-router-dom';

import { Footer } from "templates/Footer";
import { Aside } from "templates/Aside";
import { Header } from "templates/Header";
import { RightAside } from "./templates/RightAside";
import { Auth } from "controllers/Auth";
import {RegForm} from "components/RegForm/RegForm";


export const App = () => (
  <div>
    <Header/>
    <main className={style.gridContainer}>
      <Aside />
      <div className={style.content}>
        <Switch>
          <Route path={'/'} component={Auth} exact />
          <Route path={'/registration'} component={RegForm} exact />
        </Switch>
      </div>
      <RightAside />
    </main>
    <Footer/>
  </div>
);