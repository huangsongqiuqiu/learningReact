import React, { Component } from 'react';
import './App.css';
import Tab from './tab'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab tabJson = {{
          picUrl:['./1.jpeg','./2.jpeg','./3.jpeg','./4.jpeg'],
          timer:3000
        }} />
        <Tab tabJson = {{
          picUrl:['./5.jpeg','./2.jpeg','./3.jpeg','./4.jpeg','1.jpeg'],
          timer:1100
        }} />
      </div>
    );
  }
}

export default App;
