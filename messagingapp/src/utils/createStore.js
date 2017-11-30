import {
    compose,
    createStore as createReduxStore
} from 'redux';
import { connectRouter } from 'connected-react-router';
import { app } from '../reducers/app';
import {defaultChannel, getInitialChannelMessages} from "./getInitialChannelMessages";
import {getInitialChannels} from "./getInitialChannels";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    chatApp: {
        channelList: getInitialChannels(),
        messageList: getInitialChannelMessages(),
        selectedChannel: defaultChannel
    }
};

export const createStore = (history) => {

    return createReduxStore(
        connectRouter(history)(app),
        initialState);
};