import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {ChannelList} from './components/messenger/ChannelList'
import {getInitialChannels} from "./utils/getInitialChannels";
import createStore from "redux/es/createStore";
import {app} from "./reducers/app";
import {ChannelListRedux} from "./containers-redux/messenger/ChannelList";
import { Route } from 'react-router-dom';
import * as routes from "./constants/routes";
import {LayoutSelector} from "./containers-redux/LayoutSelector";


class App extends Component {
    render() {
        return <div className="App">
            <LayoutSelector />
        </div>;
    }
}

export default App;
