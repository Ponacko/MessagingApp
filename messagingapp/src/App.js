import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ChannelList} from './components/ChannelList'
import {getInitialChannels} from "./utils/getInitialChannels";
import createStore from "redux/es/createStore";
import {app} from "./reducers/app";

const initialState = {channelList: getInitialChannels()};
const store = createStore(app, initialState);
console.log('Channel state: ', store.getState());

class App extends Component {
    render() {
        return <div className="App">
            <ChannelList/>
        </div>;
    }
}

export default App;
