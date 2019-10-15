import { handleActions } from 'redux-actions';

import { loadStart, dataRecieved, errorOccured } from 'actions/auth.action';

const initialState = {
    loading: false,
    error: false,
    errorText: '',
    user: {},
};

export const reducer = handleActions({
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