import * as Immutable from 'immutable'
import {CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_UPDATE, RECEIVE_CHANNEL_LIST} from "../constants/actionTypes";

export const channelList = (previousState = Immutable.List(), action) => {
    switch (action.type){
        case RECEIVE_CHANNEL_LIST:
            console.log(action.payload.channelList);
            return Immutable.List(action.payload.channelList.channels);
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