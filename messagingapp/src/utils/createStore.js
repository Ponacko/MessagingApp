import {compose, createStore as createReduxStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {app} from '../reducers/app';
import logger from 'redux-logger';
import {defaultChannel, getInitialChannelMessages} from "./getInitialChannelMessages";
import applyMiddleware from "redux/es/applyMiddleware";
import {getPersistedToken} from "./getPersistedToken";
import {getInitialSelectedChannel} from "./getInitialSelectedChannel";

const thunk = require('redux-thunk').default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    chatApp: {
        messageList: getInitialChannelMessages(),
        selectedChannel: getInitialSelectedChannel(),
    },
    shared: {
        token: getPersistedToken()
    }
};

export const createStore = (history) => {
    const router = routerMiddleware(history);
    const middleware = [router, thunk, logger];
    return createReduxStore(
        connectRouter(history)(app),
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
};