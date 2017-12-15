import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {deleteMessage} from "../actionCreators";
import {fetchMessageDelete} from "../../utils/api/fetchMessageDelete";

export const deleteMessageApi = (channel, message) =>
    async (dispatch, getState) => {
        try {
            console.log(channel);
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchMessageDelete(authToken, channel, message);
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(deleteMessage(message.id));
        }
    };