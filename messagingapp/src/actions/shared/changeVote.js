import {performAuthorizedRequest} from "../profile/performAuthorizedRequest";
import {getMessages} from "./getMessages";
import {fetchChangeVote} from "../../utils/api/fetchChangeVote";

export const changeVote = (channel, message, vote) =>
    async (dispatch, getState) => {
        try {
            const authToken = getState().shared.token;
            const email = JSON.parse(localStorage.getItem('userEmail'));
            await performAuthorizedRequest(dispatch, async () => {
                const received = await fetchChangeVote(authToken, channel, message, email, vote);
            });
        } catch
            (error) {
            console.log(error);
        }
        finally {
            dispatch(getMessages(channel));
        }
    };