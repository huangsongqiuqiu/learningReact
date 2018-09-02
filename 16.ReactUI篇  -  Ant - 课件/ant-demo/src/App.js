import React, { Component } from 'react';

import Header from './components/header'
import Tab from './components/tabs'
import 'antd/dist/antd.css'; 
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Tab/>
      </div>
    );
  }
}

export default App;
