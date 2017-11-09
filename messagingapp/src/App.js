import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChannelList } from './components/ChannelList'

class App extends Component {
  render() {
    return (
      <div className="App">
            <ChannelList/>
      </div>
    );
  }
}

export default App;
