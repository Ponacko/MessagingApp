import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChannelList } from './components/ChannelList'
import {ChannelMessages} from "./components/ChannelMessages";
import {MessagePanel} from "./components/MessagePanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftPanel">
            <ChannelList/>
        </div>
          <div className="rightPanel">
              <ChannelMessages/>
              <div className="bottomPanel">
                  <MessagePanel/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
