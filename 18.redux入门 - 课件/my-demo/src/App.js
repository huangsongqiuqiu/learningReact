import React, { Component } from 'react';
import counter from './Reducer'
import {createStore} from 'redux';
import List from './components/list'
import './App.css';

let store = createStore(counter);
//console.log(store.getState())


class App extends Component {
  add(value){
    //store.dispatch({type:'add',text:value})
  }
  render() {
    return (
      <div className="App">
       <List
          store={store}
       />
      </div>
    );
  }
}

export {App,store};
