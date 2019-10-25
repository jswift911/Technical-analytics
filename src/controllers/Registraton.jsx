import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import { RegForm } from "components/RegForm";
import { ErrorField } from "components/ErrorField";
import { login } from "actions/auth.action";
import { Loading } from "components/Loading";
import { validator } from "functions/validator";
import { cleanErrors, registration } from 'actions/auth.action'
import { Redirect } from "react-router-dom";
import {LoginForm} from "components/LoginForm/LoginForm";

let timer;

class Registration extends Component {
    state = {
        error: false,
        errorText: '',
    };

    componentWillUnmount() {
        clearTimeout(timer);
    }

    clearErrors = () => {
        timer = setTimeout(() => {
            this.setState({
                error: false,
                errorText: '',
            });
        }, 3000);
    };

    handleSubmit = (...args) => {
        if (validator.apply(this, [...args])) {
            alert('Сервер на доработке под новые данные');
            // this.props.registration(...args);
        }
        this.clearErrors();
        this.props.cleanErrors();
    };

    render() {
        const { error, errorText } = this.state;
        const { auth } = this.props;
        const isLoggedIn = auth.user.hasOwnProperty('token') && auth.user.token;

        if (isLoggedIn) {
            return <Redirect to={'/'} />;
        } else {
            return(
                <Fragment>
                    {
                        auth.loading
                            ?
                            <Loading/>
                            :
                            <RegForm
                                isErrors={error || auth.error}
                                errors={errorText}
                                serverError={auth.errorText}
                                handleSubmit={this.handleSubmit} />
                    }
                </Fragment>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, pass) => dispatch(login(email, pass)),
        registration: (...obj) => dispatch(registration(...obj)),
        cleanErrors: () => dispatch(cleanErrors()),
    }
}

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);