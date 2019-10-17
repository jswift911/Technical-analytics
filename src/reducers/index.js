import { combineReducers } from 'redux';

import { reducer as authReducer } from "reducers/auth.reducer";
import { reducer as userReducer } from "reducers/user.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
});