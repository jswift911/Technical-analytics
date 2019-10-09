import style from './Aside.module.css';

import React from 'react';

export const Aside = () => {

  return (
    <aside className={style.leftAside}>
      <nav className={style.nav}>
        <ul>
          <li className={style.li}>Link</li>
          <li className={style.li}>Link</li>
          <li className={style.li}>Link</li>
          <li className={style.li}>Link</li>
          <li className={style.li}>Link</li>
        </ul>
      </nav>
    </aside>
  );
};