import { createAction } from 'redux-actions';
import axios from "axios";
import {endpoints} from "../../endpoints";

export const loadStart = createAction('[Auth] Load start');
export const dataRecieved = createAction('[Auth] Data recieved');
export const errorOccured = createAction('[Auth] Error occured');

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