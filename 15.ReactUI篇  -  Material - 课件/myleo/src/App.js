import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import BottomNavigationExampleSimple from './components/bottomNavigation'
import GridListExampleSimple from './components/gridlist'
import AppBarExampleIcon from './components/header'
import CardExampleWithAvatar from './components/card'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarExampleIcon Msg={"Leo's React小站"}/>
          <CardExampleWithAvatar/>
          <GridListExampleSimple/>
          <div className='zwd'></div>
          
          <BottomNavigationExampleSimple/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
