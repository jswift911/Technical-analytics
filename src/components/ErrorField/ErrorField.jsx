import style from './ErrorField.module.css';

import React from 'react';

export const ErrorField = (props) => {
    return (
        <div className={style.errorField}>
            {props.children}
        </div>
    );
};