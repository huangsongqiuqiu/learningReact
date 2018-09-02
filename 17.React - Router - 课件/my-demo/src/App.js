import React, { Component } from 'react';


import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import BottomNavigationExampleSimple from './component/bottom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();





class App extends Component {
  render() {
   
    return (<MuiThemeProvider>
      <div>
        <BottomNavigationExampleSimple/>
      </div>
    </MuiThemeProvider>);
  }
}

export default App;
