import {INPUT_CHANGED, RECEIVE_MESSAGE_LIST} from "../constants/actionTypes";

export const messagePanel = (prevState = "", action) => {
        switch(action.type){
            case INPUT_CHANGED :
                    return action.payload.string;
            case RECEIVE_MESSAGE_LIST :
                    return "";
            default: 
                return null
        }
};