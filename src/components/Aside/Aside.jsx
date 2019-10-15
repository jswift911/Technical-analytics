import style from './Aside.module.css';

import React from 'react';
import { NavLink } from "react-router-dom";

export const Aside = () => {

  return (
    <aside className={style.leftAside}>
      <nav className={style.nav}>
          <NavLink className={style.link} to={'/login'}>Login</NavLink>
          <NavLink className={style.link} to={'/registration'}>Registration</NavLink>
      </nav>
    </aside>
  );
};