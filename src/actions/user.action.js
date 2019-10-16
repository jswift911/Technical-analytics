import {createAction} from "redux-actions";
import axios from "axios";
import { endpoints } from '../../endpoints';

export const loadStart = createAction('[User] Load start');
export const dataRecieved = createAction('[User] Data recieved');
export const errorOccured = createAction('[User] Error occured');

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
        .catch(error => dispatch(errorOccured(error)));
};