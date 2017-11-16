import {channelList} from "./channelList";
import {messageList} from "./messageList";
import combineReducers from "redux/es/combineReducers";

export const chatApp = combineReducers({
    channelList,
    messageList
});