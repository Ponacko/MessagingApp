import {CHANNEL_DELETE, CHANNEL_SWITCH, CHANNEL_UPDATE, RECEIVE_CHANNEL_LIST} from "../constants/actionTypes";
import {defaultChannel} from "../utils/getInitialChannelMessages";
import {getInitialChannels} from "../utils/getInitialChannels";
import {getInitialSelectedChannel} from "../utils/getInitialSelectedChannel";

export const selectedChannel = (previousState = null, action) => {
    switch (action.type){
        case RECEIVE_CHANNEL_LIST:
            return getInitialSelectedChannel();
        case CHANNEL_SWITCH:
            return action.payload.channel;
        case CHANNEL_UPDATE:
            return action.payload.channel;
        case CHANNEL_DELETE:
            if (previousState !== null && action.payload.id === previousState.id)
                return getInitialChannels().last( channel => channel.id < previousState.id);
            else return previousState;
        default:
            return previousState;

    }
};