import uuidv4 from 'uuid/v4';
import {
    CHANNEL_ITEM_CREATE,
    CHANNEL_ITEM_DELETE,
    CHANNEL_ITEM_UPDATE,
    MESSAGE_CREATE,
    MESSAGE_DELETE,
    MESSAGE_UPDATE
} from '../constants/actionTypes';

export const createNewChannel = (newChannel) => ({
    type: CHANNEL_ITEM_CREATE,
    payload: {
        item: {
        ...newChannel,
        id: uuidv4(),
        },
    }
});

export const deleteChannel = (id) => ({
    type: CHANNEL_ITEM_DELETE,
    payload: {
        id
    }
});

export const updateChannel = (channel) => ({
    type: CHANNEL_ITEM_UPDATE,
    payload: {
        channel
    }
});

export const createNewMessage = (newMessage) => ({
    type: MESSAGE_CREATE,
    payload: {
        item: {
            ...newMessage,
            id: uuidv4(),
        },
    }
});

export const deleteMessage = (id) => ({
    type: MESSAGE_DELETE,
    payload: {
        id
    }
});

export const updateMessage = (message) => ({
    type: MESSAGE_UPDATE,
    payload: {
        message
    }
});