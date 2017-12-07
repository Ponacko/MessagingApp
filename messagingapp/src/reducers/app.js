import {chatApp} from "./chatApp";
import combineReducers from "redux/es/combineReducers";
import {shared} from "./shared/shared";
import {profile} from "./profile/profile";

export const app = combineReducers({
    chatApp,
    shared,
    profile
});