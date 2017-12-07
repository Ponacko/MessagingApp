import {FAILED_AUTHENTICATION_MESSAGE, MILLISECONDS_TO_AUTO_DISMISS_ERROR} from "../../constants/uiConstants";
import {dismissError, failAuthentication} from "./actionCreators";
import {push} from "connected-react-router";
import {fetchRegisterUser} from "../../utils/api/fetchRegisterUser";

export const registerUser = (destinationLocation, email) =>
    (dispatch) => {
        return fetchRegisterUser(email)
            .then(() => {
                dispatch(push(destinationLocation));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILLISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };