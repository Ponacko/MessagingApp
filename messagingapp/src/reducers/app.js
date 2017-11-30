import {chatApp} from "./chatApp";
import combineReducers from "redux/es/combineReducers";
import {shared} from "./shared/shared";

export const app = combineReducers({
    chatApp,
    shared
});