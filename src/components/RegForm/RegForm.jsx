import style from './RegForm.module.css';

import React, { useState } from 'react';

export const RegForm = (props) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repeatPassword, setRepeatPassword ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ organization, setOrganization ] = useState('');

    return (
        <div className={style.regPage}>
            <div className={style.form}>
                <div className={style.regForm}>
                    <input onChange={event => setUsername(event.target.value)} name="username" type="email"
                           placeholder="email" value={username} />
                    <input onChange={event => setPassword(event.target.value)} name="password" type="password"
                           placeholder="password" value={password} />
                    <input onChange={event => setRepeatPassword(event.target.value)} name="repeatPassword"
                           type="password" placeholder="repeat password" value={repeatPassword} />
                    <input onChange={event => setFirstName(event.target.value)} name="firstName" type="text"
                           placeholder="first name" value={firstName} />
                    <input onChange={event => setLastName(event.target.value)} name="lastName" type="text"
                           placeholder="last name" value={lastName} />
                    <input onChange={event => setOrganization(event.target.value)} name="organization" type="text"
                           placeholder="organization" value={organization} />
                    <button className={style.regBtn} >Send</button>
                </div>
            </div>
        </div>
    );
};