import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Provider from "react-redux/es/components/Provider";
import {getInitialChannels} from "./utils/getInitialChannels";
import createStore from "redux/es/createStore";
import {app} from "./reducers/app";
import {defaultChannel, getInitialChannelMessages} from "./utils/getInitialChannelMessages";

const initialState = {chatApp: {channelList: getInitialChannels(), messageList: getInitialChannelMessages(), selectedChannel: defaultChannel}};
const store = createStore(app, initialState);
console.log('Channel state: ', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
