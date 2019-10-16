import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import { RegForm } from "components/RegForm";
import { ErrorField } from "components/ErrorField";
import { login } from "actions/auth.action";
import { Loading } from "components/Loading";
import { validator } from "functions/validator";
import { registration } from 'actions/user.action'

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
            this.props.registration(...args);
        }
        this.clearErrors();
    };

    render() {
        const { error, errorText } = this.state;
        return(
            <Fragment>
                {this.props.loading ? <Loading/> : <RegForm handleSubmit={this.handleSubmit} />}
                {error && <ErrorField>{errorText}</ErrorField>}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        loading: state.user.loading,
        error: state.user.error,
        errorText: state.user.errorText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, pass) => dispatch(login(email, pass)),
        registration: (...obj) => dispatch(registration(...obj)),
    }
}

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);