import {
    CANCEL_EDITING_CHANNEL, CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_UPDATE,
    START_EDITING_CHANNEL
} from "../constants/actionTypes";

export const editedChannelId = (prevState = null, action) => {
    switch (action.type) {
        case START_EDITING_CHANNEL:
            return action.payload.id;
        case CHANNEL_CREATE:
            return action.payload.channel.id;
        case CANCEL_EDITING_CHANNEL:
        case CHANNEL_DELETE:
        case CHANNEL_UPDATE:
        default:
            return null;
    }
};