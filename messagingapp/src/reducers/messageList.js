import * as Immutable from 'immutable';
import {
    MESSAGE_CREATE,
    MESSAGE_UPDATE,
    MESSAGE_DELETE
} from "../constants/actionTypes";

export const messageList = (previousState = Immutable.List, action) => {
    switch (action.type){
        case MESSAGE_CREATE:
            return previousState.push({ ...action.payload.message});
        case MESSAGE_DELETE: {
            const message = action.payload.message;
            const messageIndex = previousState.findIndex(i => i.id === message.id);
            return messageIndex >= 0
                ? previousState.update(messageIndex, previousMessage => ({...previousMessage, ...message}))
                : previousState;
        }
        case MESSAGE_UPDATE:
            return previousState.filterNot(message => message.id === action.payload.id);
        default:
            return previousState;
    }
};