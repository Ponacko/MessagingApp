import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {ChannelList} from './components/ChannelList'
import {getInitialChannels} from "./utils/getInitialChannels";
import createStore from "redux/es/createStore";
import {app} from "./reducers/app";
import {ChannelListRedux} from "./containers-redux/ChannelList";
import { Route } from 'react-router-dom';
import * as routes from "./constants/routes";


class App extends Component {
    render() {
        return <div className="App">
            <Route exact path={routes.ROOT} component={ChannelListRedux} key="default" />
        </div>;
    }
}

export default App;
