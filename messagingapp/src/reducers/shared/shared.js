import {combineReducers} from 'redux';
import {token} from './token';
import {isAuthenticating} from "./isAuthenticating";
import {errors} from "./errors";

export const shared = combineReducers({
    isAuthenticating,
    token,
    errors,
});