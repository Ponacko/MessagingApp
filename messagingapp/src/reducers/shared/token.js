import {
    SHARED_AUTHENTICATION_FAILED,
    SHARED_INVALIDATE_TOKEN,
    SHARED_RECEIVE_TOKEN,
} from '../../constants/actionTypes';

export const token = (prevState = null, action) => {
    switch (action.type) {
        case SHARED_RECEIVE_TOKEN:
            return action.payload.token;
        case SHARED_AUTHENTICATION_FAILED:
        case SHARED_INVALIDATE_TOKEN:
            return null;

        default:
            return prevState;
    }
};