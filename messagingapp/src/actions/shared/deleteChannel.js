import {deleteChannel} from "../actionCreators";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {fetchDeleteChannel} from "../../utils/api/fetchDeleteChannel";

export const deleteChannelApi = (channel) =>
    async (dispatch, getState) => {
        try {
            console.log(channel);
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchDeleteChannel(authToken, channel);
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(deleteChannel(channel.id));
        }
    };