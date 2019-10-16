import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import { RegForm } from "components/RegForm";
import { ErrorField } from "components/ErrorField";
import { login } from "actions/auth.action";
import {Loading} from "components/Loading";



class Registration extends Component {
    state = {
        error: false,
        errorText: '',
    };

    render() {
        const { error, errorText } = this.state;
        return(
            <Fragment>
                {this.props.loading ? <Loading/> : <RegForm />}
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