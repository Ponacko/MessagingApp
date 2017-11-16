import * as Immutable from 'immutable'
import {
    CHANNEL_UPDATE,
    CHANNEL_DELETE,
    CHANNEL_CREATE
} from "../constants/actionTypes";

export const channelList = (previousState = Immutable.List(), action) => {
    switch (action.type){
        case CHANNEL_CREATE:
            return previousState.push({...action.payload.channel});
        case CHANNEL_UPDATE: {
            const channel = action.payload.channel;
            const channelIndex = previousState.findIndex(i => i.id === channel.id);
            return channelIndex >= 0
                ? previousState.update(channelIndex, previousItem => ({...previousItem, ...channel}))
                : previousState;
        }
        case CHANNEL_DELETE:
            return previousState.filterNot(channel => channel.id === action.payload.id);
        default:
            return previousState;

    }
};