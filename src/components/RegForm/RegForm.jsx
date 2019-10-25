import style from './RegForm.module.css';

import React, { useState } from 'react';
import {Link} from "react-router-dom";

import bg from '../../images/BG.webp'
import { closeEye, eye } from "../../images/eyes";


export const RegForm = (props) => {
    const [ organization, setOrganization ] = useState('');
    const [ companyFocus, setCompanyFocus ] = useState(false);
    const [ name, setName ] = useState('');
    const [ nameFocus, setNameFocus ] = useState(false);
    const [ phone, setPhone ] = useState('');
    const [ phoneFocus, setPhoneFocus ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [ password, setPassword] = useState('');
    const [ passwordFocus, setPasswordFocus ] = useState(false);
    const [ repeatPassword, setRepeatPassword ] = useState('');
    const [ repeatPasswordFocus, setRepeatPasswordFocus ] = useState(false);
    const [ passwordType, setPasswordType ] = useState(false);
    const [ repeatPasswordType, setRepeatPasswordType ] = useState(false);

    const handleSubmit = () => {
        props.handleSubmit({email, password, repeatPassword, phone, name, organization});
        setPassword('');
        setRepeatPassword('');
    };

    const imgStyle = {
        backgroundImage: `url(${bg})`,
    };

    return (
        <div className={style.overlay}>
            <div style={imgStyle} className={style.regPage}>
                <div className={style.regPage__rightSide}>
                    <div className={style.form}>
                        <header className={style.header}>регистрация</header>
                        <ul className={style.formList}>
                            <li className={style.formListItem}>
                                <label htmlFor="organization">{companyFocus && 'Название компании'}</label>
                                <div className={style.controlWrapper}>
                                    <input onChange={event => setOrganization(event.target.value)}
                                           onFocus={() => setCompanyFocus(true)}
                                           onBlur={() => setCompanyFocus(false)}
                                           name="organization" type="text"
                                           placeholder={companyFocus ? '' : "Название компании"}
                                           value={organization} id="organization"/>
                                </div>
                            </li>
                            <li className={style.formListItem}>
                                <label htmlFor="organization">{nameFocus && 'Имя и Фамилия'}</label>
                                <div className={style.controlWrapper}>
                                    <input onChange={event => setName(event.target.value)}
                                           onFocus={() => setNameFocus(true)}
                                           onBlur={() => setNameFocus(false)}
                                           name="name" type="text"
                                           placeholder={nameFocus ? '' : 'Ваше имя и фамилия'} value={name} />
                                </div>
                            </li>
                            <li className={style.formListItem}>
                                <label htmlFor="phone">{phoneFocus && 'Телефон'}</label>
                                <div className={style.controlWrapper}>
                                    <input onChange={event => setPhone(event.target.value)}
                                           onFocus={() => setPhoneFocus(true)}
                                           onBlur={() => setPhoneFocus(false)}
                                           name="phone" type="tel"
                                           placeholder={phoneFocus ? '' : '+7 (___) ___-__-__'} value={phone} />
                                </div>
                            </li>
                            <li className={style.formListItem}>
                                <label htmlFor="email">{emailFocus && 'Email'}</label>
                                <div className={style.controlWrapper}>
                                    <input onChange={event => setEmail(event.target.value)}
                                           onFocus={() => setEmailFocus(true)}
                                           onBlur={() => setEmailFocus(false)}
                                           name="username" type="email"
                                           placeholder={emailFocus ? '' : 'Email'} value={email} />
                                </div>
                            </li>
                            <li className={style.formListItem}>
                                <label htmlFor="password">{passwordFocus && 'Пароль'}</label>
                                <div className={style.controlWrapper} id={style.password}>
                                    <input onChange={event => setPassword(event.target.value)}
                                           onFocus={() => setPasswordFocus(true)}
                                           onBlur={() => setPasswordFocus(false)}
                                           name="password"
                                           type={!passwordType ? 'password' : 'text'}
                                           placeholder={passwordFocus ? '' : 'Пароль'} value={password} />
                                    <div onClick={() => setPasswordType(!passwordType)}>
                                        {!passwordType ? closeEye : eye}
                                    </div>
                                </div>
                            </li>
                            <li className={style.formListItem}>
                                <label htmlFor="repeatPassword">{repeatPasswordFocus && 'Повторите пароль'}</label>
                                <div className={style.controlWrapper} id={style.repeatPassword}>
                                    <input onChange={event => setRepeatPassword(event.target.value)}
                                           onFocus={() => setRepeatPasswordFocus(true)}
                                           onBlur={() => setRepeatPasswordFocus(false)}
                                           name="repeatPassword"
                                           type={!repeatPasswordType ? 'password' : 'text'}
                                           placeholder={repeatPassword ? '' : 'Повторите пароль'}
                                           value={repeatPassword} />
                                    <div onClick={() => setRepeatPasswordType(!repeatPasswordType)}>
                                        {!repeatPasswordType ? closeEye : eye}
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className={style.policy}>
                            <span>Нажимая Регистрация, вы соглашаетесь с
                                <Link to={'#'}> Политикой конфедициальности</Link>
                            </span>
                        </div>
                        <button className={style.regBtn} onClick={() => handleSubmit()}>регистрация</button>
                        <div className={style.errorField}>
                            {props.isErrors && props.errors || props.serverError}
                        </div>
                        <div className={style.regField}>
                            <span>Уже зарегистрированы?
                                <Link className={style.link} to={'/login'}> Войти</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};