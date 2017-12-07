import {startSubmit} from 'redux-form';
import {failUploadingProfileDetails, updateProfileDetails,} from './actionCreators';
import {createApiUserUri, USER_EMAIL} from '../../constants/api';
import {dismissError} from '../shared/actionCreators';
import {fetchRequest} from '../../utils/api/fetchRequest';
import {convertFromServerDetails, convertToServerDetails} from '../../utils/api/conversions/profileDetails';
import {DETAILS_FORM_NAME} from '../../constants/formNames';
import {performAuthorizedRequest} from './performAuthorizedRequest';
import {FAILED_UPDATE_DETAILS_MESSAGE, MILLISECONDS_TO_AUTO_DISMISS_ERROR,} from '../../constants/uiConstants';

export const uploadUserDetails = (details) =>
    async (dispatch, getState) => {
        dispatch(startSubmit(DETAILS_FORM_NAME));

        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(USER_EMAIL);
        const serverDetails  = convertToServerDetails(details);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const recievedServerDetails = await fetchRequest(requestUri, authToken, serverDetails);
                const updatedDetails = convertFromServerDetails(recievedServerDetails);
                return dispatch(updateProfileDetails(updatedDetails));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(failUploadingProfileDetails(FAILED_UPDATE_DETAILS_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILLISECONDS_TO_AUTO_DISMISS_ERROR);
        }

        return dispatch(DETAILS_FORM_NAME);
    };