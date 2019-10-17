import { createAction } from 'redux-actions';
import axios from "axios";
import {endpoints} from "../../endpoints";

export const loadStart = createAction('[Auth] Load start');
export const dataRecieved = createAction('[Auth] Data recieved');
export const errorOccured = createAction('[Auth] Error occured');
export const logout = createAction('[Auth] Logout');
export const clearErrors = createAction('[Auth] Clear Errors');

export const login = (username, password) => (dispatch) => {

    dispatch(loadStart());

    const params = new URLSearchParams;
    params.append('email', username);
    params.append('password', password);

    axios.post(endpoints.auth, params, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    })
        .then(response => {
            const { data } = response;
            dispatch(dataRecieved(data));
        })
        .catch(error => dispatch(errorOccured(error)));
};

export const registration = (...obj) => (dispatch) => {
    const { username, password, firstName, lastName, organization } = obj[0];
    console.log('inner obj: ', username);
    dispatch(loadStart());

    const params = new URLSearchParams;
    params.append('email', username);
    params.append('password', password);
    params.append('firstName', firstName);
    params.append('lastName', lastName);
    params.append('organization', organization);

    axios.post(endpoints.user, params, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            console.log(response);
            const { data } = response;
            dispatch(dataRecieved(data));
        })
        .catch(error => {
            dispatch(errorOccured(error));
        });
};

export const cleanErrors = () => (dispatch) => {
    setTimeout(() => {
        dispatch(clearErrors());
    }, 3000);
};