import {fetchMessageList} from "../../utils/api/fetchMessageList";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {receiveMessageList} from "./actionCreators";
import {clearMessageList} from "../actionCreators";

export const getMessages = (channel) =>
    async (dispatch, getState) => {
        try {
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
                dispatch(clearMessageList());
                await fetchMessageList(authToken, channel)
                    .then((data) => {
                    dispatch(receiveMessageList(data));
                });
            });
        } catch
            (error) {
            console.log(error)
        }
    };