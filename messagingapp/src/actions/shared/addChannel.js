import {createNewChannel, startEditingChannel} from "../actionCreators";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {fetchCreateChannel} from "../../utils/api/fetchCreateChannel";
import {initializeChannels} from "./getAppData";

export const createChannelApi = (channel) =>
    async (dispatch, getState) => {
        try {
            console.log(channel);
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
                const userEmail = JSON.parse(localStorage.getItem('userEmail'));
                const received = await fetchCreateChannel(authToken, channel, userEmail);
                dispatch(initializeChannels());
                dispatch(startEditingChannel(channel.id));
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(createNewChannel(channel));
        }
    };