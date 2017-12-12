import {getInitialSelectedChannel} from "./getInitialSelectedChannel";
import {getMessages} from "../actions/shared/getMessages";


export const getInitialChannelMessages = (channel = getInitialSelectedChannel()) => {
    let storedListJSON = null;
    if (channel) {
        storedListJSON = getMessages(channel)
    }
};