import React, { Component } from 'react';
import counter from './Reducer'
import {createStore} from 'redux';
import Counter from './components/counter'
import './App.css';

let store = createStore(counter);
//console.log(store.getState())


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Counter
          value={store.getState()}
          onAdd={()=>store.dispatch({type:'add'})}
          onLeo={()=>store.dispatch({type:'leo'})}
        />
      </div>
    );
  }
}

export {App,store};
