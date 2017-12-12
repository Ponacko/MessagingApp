import {INPUT_CHANGED, RECEIVE_MESSAGE_LIST} from "../constants/actionTypes";

export const messagePanel = (prevState = "", action) => {
        switch(action.type){
            case INPUT_CHANGED :
                    //console.log(prevState, action)
                    return action.payload.string;
            case RECEIVE_MESSAGE_LIST :
                    //console.log(prevState, action);
                    return "";
            default:
                return null
        }
};