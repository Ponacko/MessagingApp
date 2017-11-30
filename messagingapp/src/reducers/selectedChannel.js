import * as Immutable from "immutable";
import {CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_SWITCH, CHANNEL_UPDATE} from "../constants/actionTypes";
import {defaultChannel} from "../utils/getInitialChannelMessages";
import {getInitialChannels} from "../utils/getInitialChannels";

export const selectedChannel = (previousState = null, action) => {
    switch (action.type){
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