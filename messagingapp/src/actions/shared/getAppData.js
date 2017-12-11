import {dismissError, failAuthentication} from '../shared/actionCreators';
import {MILLISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import {fetchAppData} from '../../utils/api/fetchAppData';
import {receiveChannelList} from "../actionCreators";

export const initializeChannels = () =>
    (dispatch , getState) => {
        const token = getState().shared.token;

        return fetchAppData(token)
            .then((data) => {
                dispatch(receiveChannelList(data));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication("There was an error while fetching app data.", error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILLISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };