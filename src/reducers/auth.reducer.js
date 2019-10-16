import { handleActions } from 'redux-actions';

import {loadStart, dataRecieved, errorOccured, logout} from 'actions/auth.action';

const initialState = {
    loading: false,
    error: false,
    errorText: '',
    user: {},
};

export const reducer = handleActions({
    [logout]: (state) => {
        return {
            loading: false,
            error: false,
            errorText: '',
            user: {},
            isLoggedIn: false,
        }
    },
    [loadStart]: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    [dataRecieved]: (state, action) => {
        const data = action.payload;
        if (data.status === 'ok') {
            return {
                ...state,
                user: data.message,
                loading: false,
                isLoggedIn: true,
            };
        }
    },
    [errorOccured]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            loading: false,
            error: true,
            errorText: data.message,
        };
    }
}, initialState);