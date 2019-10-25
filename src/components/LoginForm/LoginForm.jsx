import style from './LoginForm.module.css';

import bg from '../../images/BG.webp'
import { eye, closeEye } from "../../images/eyes";

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
                <div className={style.loginPage__rightSide}>
                    <div className={style.loginForm}>
                        <header className={style.header}>вход</header>
                        <ul className={style.formList}>
                            <li className={style.formListItem}>
                                <label htmlFor={style.email}>{emailFocus && 'Email'}</label>
                                <div className={style.inputWrapper}>
                                    <input onChange={event => setEmail(event.target.value)}
                                           onFocus={() => setEmailFocus(true)}
                                           onBlur={() => setEmailFocus(false)}
                                           name="email" type="text"
                                           placeholder={emailFocus ? '' : 'Email'}
                                           value={email}/>
                                </div>
                            </li>
                            <li className={style.formListItem}>
                                <label htmlFor={style.password}>{passwordFocus && 'Пароль'}</label>
                                <div className={style.inputWrapper} id={style.password}>
                                    <input onChange={event => setPassword(event.target.value)}
                                           onFocus={() => setPasswordFocus(true)}
                                           onBlur={() => setPasswordFocus(false)}
                                           name="password"
                                           type={!type ? 'password' : 'text'}
                                           placeholder={passwordFocus ? '' : 'Пароль'}
                                           value={password}/>
                                    <div onClick={() => setType(!type)}>
                                        {!type ? closeEye : eye}
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button onClick={() => handlerSignIn()} className={style.loginBtn}>войти</button>
                        <div className={style.errorField}>
                            {props.isErrors && props.errors || props.serverError}
                        </div>
                        <div className={style.regField}>
                        <span>Первый раз на сайте?
                            <Link className={style.link} to={'/registration'}> Зарегистрироваться</Link>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};