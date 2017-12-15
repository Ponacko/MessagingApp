import * as Immutable from 'immutable';
import {CLEAR_MESSAGE_LIST, MESSAGE_DELETE, RECEIVE_MESSAGE_LIST} from "../constants/actionTypes";

export const messageList = (previousState = Immutable.List(), action) => {
    switch (action.type){
        case RECEIVE_MESSAGE_LIST:
            return action.payload.messageList;
        case CLEAR_MESSAGE_LIST:
            return Immutable.List();
        case MESSAGE_DELETE: {
            /*const message = action.payload.id;
            const messageIndex = previousState.findIndex(i => i.id === message);
            return messageIndex >= 0
                ? previousState.update(messageIndex, previousMessage => ({...previousMessage, ...message}))
                : previousState;*/
            return previousState.filterNot(message => message.id === action.payload.id);
        }
        /*case MESSAGE_UPDATE:
            return previousState.filterNot(message => message.id === action.payload.id);*/
        default:
            return previousState;
    }
};