import * as Immutable from "immutable";
import {CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_SWITCH, CHANNEL_UPDATE} from "../constants/actionTypes";
import {defaultChannel} from "../utils/getInitialChannelMessages";

export const selectedChannel = (previousState = null, action) => {
    switch (action.type){
        case CHANNEL_SWITCH:
            return action.payload.channel;
        case CHANNEL_CREATE:
            return action.payload.channel;
        default:
            return previousState;

    }
};