import uuidv4 from 'uuid/v4';
import {
    CANCEL_EDITING_CHANNEL,
    CHANNEL_CREATE,
    CHANNEL_DELETE,
    CHANNEL_SWITCH,
    CHANNEL_UPDATE,
    INPUT_CHANGED,
    MESSAGE_CREATE,
    MESSAGE_DELETE,
    MESSAGE_SEND,
    MESSAGE_UPDATE,
    START_EDITING_CHANNEL
} from '../constants/actionTypes';

export const createNewChannel = (newChannel) => ({
    type: CHANNEL_CREATE,
    payload: {
        channel: {
        ...newChannel,
        id: uuidv4(),
        },
    }
});

export const deleteChannel = (id) => ({
    type: CHANNEL_DELETE,
    payload: {
        id
    }
});

export const updateChannel = (channel) => ({
    type: CHANNEL_UPDATE,
    payload: {
        channel
    }
});

export const startEditingChannel = (id) => ({
    type: START_EDITING_CHANNEL,
    payload: {
        id,
    }
});

export const cancelEditingChannel = () => ({
    type: CANCEL_EDITING_CHANNEL,
});

export const sendMessage = (message) => ({
    type: MESSAGE_SEND,
    payload: {
        message
    }
});


export const changeInput = (string) => ({
   type: INPUT_CHANGED,
    payload: {
       string
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

export const switchChannel = (channel) => ({
    type: CHANNEL_SWITCH,
    payload: {
        channel
    }
});