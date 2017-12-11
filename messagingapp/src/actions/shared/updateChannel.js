import {updateChannel} from "../actionCreators";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {fetchUpdateChannel} from "../../utils/api/fetchUpdateChannel";

export const updateChannelApi = (channel) =>
    async (dispatch, getState) => {
        try {
            console.log(channel);
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchUpdateChannel(authToken, channel);
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(updateChannel(channel));
        }
    };