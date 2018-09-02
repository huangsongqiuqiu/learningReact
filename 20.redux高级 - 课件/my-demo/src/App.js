import React, { Component } from 'react';


import {store} from './store';
import './App.css';
import GridListExampleSimple from './components/Grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



//console.log(store.getState())


class App extends Component {
  click(){
      store.dispatch({type:'changePic'})
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <input type='button' value='change' onClick={this.click.bind(this)}/>
          <GridListExampleSimple/>
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default App;
