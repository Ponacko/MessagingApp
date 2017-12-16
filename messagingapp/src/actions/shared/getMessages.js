import {fetchMessageList} from "../../utils/api/fetchMessageList";
import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {receiveMessageList} from "./actionCreators";

export const getMessages = (channel) =>
    async (dispatch, getState) => {
        try {
            const authToken = getState().shared.token;
            await performAuthorizedRequest(dispatch, async () => {
               // dispatch(clearMessageList());
                console.log("performAuthorizedRequest");
                await fetchMessageList(authToken, channel)
                    .then((data) => {
                    dispatch(receiveMessageList(data));
                        console.log("receiveMessageList");
                });
            });
        } catch
            (error) {
            console.log(error)
        }
    };