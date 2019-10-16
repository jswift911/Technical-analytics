import style from './LoginForm.module.css';

import React, { useState } from 'react';
import {Link} from "react-router-dom";

export const LoginForm = (props) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handlerSignIn = () => {
        props.handleSignIn({username, password});
        setUsername('');
        setPassword('');
    };

    return (
        <div className={style.loginPage}>
            <div className={style.form}>
                <div className={style.loginForm}>
                    <input onChange={event => setUsername(event.target.value)}
                           name="username" type="text"
                           placeholder="username"
                           value={username} />
                    <input onChange={event => setPassword(event.target.value)}
                           name="password"
                           type="password"
                           placeholder="password"
                           value={password} />
                    <button onClick={() => handlerSignIn()} className={style.loginBtn}>sign in</button>
                    <Link className={style.link} to={'/registration'}>Registration</Link>
                </div>
            </div>
        </div>
    );
};