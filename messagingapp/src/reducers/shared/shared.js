import {combineReducers} from 'redux';
import {token} from './token';
import {isAuthenticating} from "./isAuthenticating";

export const shared = combineReducers({
    isAuthenticating,
    token,
});