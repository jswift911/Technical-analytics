import style from './LoginForm.module.css';

import bg from '../../images/BG.webp'

import React, { useState } from 'react';
import {Link} from "react-router-dom";

export const LoginForm = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ type, setType ] = useState(false);
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [ passwordFocus, setPasswordFocus ] = useState(false);

    const handlerSignIn = () => {
        props.handleSignIn({email: email, password});
        setPassword('');
    };

    const imgStyle = {
        backgroundImage: `url(${bg})`,
    };

    return (
        <div className={style.overlay}>
            <div style={imgStyle} className={style.loginPage}>
                <div className={style.form}>
                    <div className={style.loginForm}>
                        <header className={style.header}>вход</header>
                        <label htmlFor={style.email}>{emailFocus && 'Email'}
                        <div className={style.inputWrapper}>
                            <input onChange={event => setEmail(event.target.value)}
                                   onFocus={() => setEmailFocus(true)}
                                   onBlur={() => setEmailFocus(false)}
                                   name="email" type="text"
                                   placeholder={emailFocus ? '' : 'Email'}
                                   value={email}
                                   id={style.email}/>
                        </div>
                        </label>
                        <label htmlFor={style.password}>{passwordFocus && 'Пароль'}
                            <div className={style.inputWrapper}>
                                <input onChange={event => setPassword(event.target.value)}
                                       onFocus={() => setPasswordFocus(true)}
                                       onBlur={() => setPasswordFocus(false)}
                                       name="password"
                                       type={!type ? 'password' : 'text'}
                                       placeholder={passwordFocus ? '' : 'Пароль'}
                                       value={password}
                                       id={style.password}/>
                                <div onClick={() => setType(!type)}>
                                    {!type ? <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"/>
                                    </svg> :
                                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/>
                                    </svg>}
                                </div>
                            </div>
                        </label>
                        <button onClick={() => handlerSignIn()} className={style.loginBtn}>войти</button>
                        <div className={style.errorField}>
                            {props.isErrors && props.errors || props.serverError}
                        </div>
                    </div>
                    <div className={style.regField}>
                        <span>Первый раз на сайте?
                            <Link className={style.link} to={'/registration'}> Зарегистрироваться</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};