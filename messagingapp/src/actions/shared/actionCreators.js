import * as actionTypes from '../../constants/actionTypes';
import {SHARED_RECEIVE_TOKEN} from "../../constants/actionTypes";
import {SHARED_INVALIDATE_TOKEN} from "../../constants/actionTypes";

export const receiveValidToken = () => ({
    type: SHARED_RECEIVE_TOKEN,
    payload: {
        token: 'forged-token-much-guid-such-wow',
    }
});

export const invalidateToken = () => ({
    type: SHARED_INVALIDATE_TOKEN,
});