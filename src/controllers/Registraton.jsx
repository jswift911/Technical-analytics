import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import { RegForm } from "components/RegForm";
import { ErrorField } from "components/ErrorField";
import { login } from "actions/auth.action";
import { Loading } from "components/Loading";
import { validatorObj } from "functions/validator";

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
        if (validatorObj.apply(this, [...args])) {
            console.log(...args);
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
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.error,
        errorText: state.auth.errorText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, pass) => dispatch(login(email, pass)),
    }
}

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);