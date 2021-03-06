import * as actionTypes from '../../constants/actionTypes';
import uuidv4 from 'uuid/v4';

export const receiveValidToken = (token) => ({
    type: actionTypes.SHARED_RECEIVE_TOKEN,
    payload: {
        token,
    }
});

export const invalidateToken = () => ({
    type: actionTypes.SHARED_INVALIDATE_TOKEN,
});

export const startAuthentication = () => ({
    type: actionTypes.SHARED_AUTHENTICATION_STARTED,
});

export const failAuthentication = (errorMessage, error) => ({
    type: actionTypes.SHARED_AUTHENTICATION_FAILED,
    payload: {
        error: {
            id: uuidv4(),
            message: errorMessage,
            statusText: error.message,
            statusCode: error.statusCode,
        },
    }
});

export const dismissError = (errorId) => ({
    type: actionTypes.SHARED_DISMISS_ERROR,
    payload: {
        errorId,
    }
});

export const receiveMessageList = (messageList) => ({
    type: actionTypes.RECEIVE_MESSAGE_LIST,
    payload: {
        messageList,
    }
});