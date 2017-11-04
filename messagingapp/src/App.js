import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChannelList } from './components/ChannelList'
import {ActualChannel} from "./components/ActualChannel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftPanel">
            <ChannelList/>
        </div>
          <div>
              <ActualChannel/>
          </div>
      </div>
    );
  }
}

export default App;
