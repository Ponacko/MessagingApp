import {channelList} from "./channelList";
import {messageList} from "./messageList";
import combineReducers from "redux/es/combineReducers";
import {editedChannelId} from "./editedChannelId";

export const chatApp = combineReducers({
    channelList,
    editedChannelId,
    messageList
});