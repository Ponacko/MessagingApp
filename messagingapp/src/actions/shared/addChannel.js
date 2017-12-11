import {updateChannel} from "../actionCreators";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {convertToServerChannelCreate} from "../../utils/api/conversions/channel";
import {fetchPatch} from "../../utils/api/fetchPatch";
import {API_APP_URI} from "../../constants/api";

export const addChannel = (channel) =>
    async (dispatch, getState) => {
        try {
            console.log(channel);
            const authToken = getState().shared.token;
            const serverChannel = convertToServerChannelCreate(channel);
            console.log(serverChannel);
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchPatch(API_APP_URI, authToken, serverChannel);
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(updateChannel(channel));
        }
    };