import * as Immutable from 'immutable';
import {
    MESSAGE_CREATE,
    MESSAGE_UPDATE,
    MESSAGE_DELETE, CHANNEL_SWITCH, CHANNEL_CREATE, CHANNEL_UPDATE
} from "../constants/actionTypes";
import {getInitialChannelMessages} from "../utils/getInitialChannelMessages";

export const messageList = (previousState = Immutable.List(), action) => {
    switch (action.type){
        case CHANNEL_SWITCH:
            return getInitialChannelMessages(action.payload.channel);
        case CHANNEL_UPDATE:
            return getInitialChannelMessages(action.payload.channel);
        case MESSAGE_CREATE:
            console.log({...action.payload.item});
            return previousState.push({ ...action.payload.item});
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