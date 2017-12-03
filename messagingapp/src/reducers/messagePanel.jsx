import {INPUT_CHANGED, MESSAGE_CREATE, MESSAGE_SEND} from "../constants/actionTypes";
import * as Immutable from 'immutable';

export const messagePanel = (prevState = "", action) => {
        switch(action.type){
            case INPUT_CHANGED :
                    //console.log(prevState, action)
                    return action.payload.string;
            case MESSAGE_CREATE :
                    //console.log(prevState, action);
                    return "";
            default:
                return null
        }
};