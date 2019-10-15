import { combineReducers } from 'redux';

import { reducer as authReducer } from "reducers/auth.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
});