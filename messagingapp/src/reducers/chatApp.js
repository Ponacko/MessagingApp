import {channelList} from "./channelList";
import {messageList} from "./messageList";
import {messagePanel} from "./messagePanel";
import combineReducers from "redux/es/combineReducers";
import {editedChannelId} from "./editedChannelId";
import {selectedChannel} from "./selectedChannel";
import {message} from "./message";

export const chatApp = combineReducers({
    channelList,
    editedChannelId,
    messageList,
    messagePanel,
    selectedChannel,
    message
});