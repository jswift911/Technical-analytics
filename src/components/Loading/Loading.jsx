import style from './Loading.module.css';

import React from 'react';

export const Loading = () => {
  return (
    <div className={style.loadingWrapper}>
      <div className={style.ldsRoller}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};