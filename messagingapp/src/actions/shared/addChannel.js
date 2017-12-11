import {updateChannel} from "../actionCreators";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {convertToServerChannelCreate} from "../../utils/api/conversions/channel";
import {fetchAddChannel} from "../../utils/api/fetchAddChannel";

export const addChannel = (channel) =>
    async (dispatch, getState) => {
        try {
            console.log(channel);
            const authToken = getState().shared.token;
            const serverChannel = convertToServerChannelCreate(channel);
            console.log(serverChannel);
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchAddChannel(authToken, channel);
            });
        } catch
            (error) {
            console.log(error)
        }
        finally {
            dispatch(updateChannel(channel));
        }
    };