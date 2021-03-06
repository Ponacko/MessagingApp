import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {fetchMessageCreate} from "../../utils/api/fetchMessageCreate";
import {getMessages} from "./getMessages";

export const sendMessageApi = (channel, message) =>
    async (dispatch, getState) => {
        try {
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchMessageCreate(authToken, channel, message);
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(getMessages(channel));
        }
    };