import {channelList} from "./channelList";
import {messageList} from "./messageList";

export const chatApp = (prevState, action) => ({
    channelList: channelList(prevState.channelList, action),
    messageList: messageList(prevState.messageList, action)
});