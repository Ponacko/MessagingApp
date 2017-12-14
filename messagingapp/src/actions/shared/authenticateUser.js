import {dismissError, failAuthentication, receiveValidToken, startAuthentication} from './actionCreators';
import {push} from 'connected-react-router';
import * as keys from "../../constants/localStorageKeys";
import {fetchAuthToken} from "../../utils/api/fetchAuthToken";
import {FAILED_AUTHENTICATION_MESSAGE, MILLISECONDS_TO_AUTO_DISMISS_ERROR} from "../../constants/uiConstants";

export const authenticateUser = (destinationLocation, email) =>
    (dispatch) => {
        dispatch(startAuthentication());
        return fetchAuthToken(email)
            .then((token) => {
                localStorage.setItem("userEmail", JSON.stringify(email));
                dispatch(receiveValidToken(token));
                dispatch(push(destinationLocation));

                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILLISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };