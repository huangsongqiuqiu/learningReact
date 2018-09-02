import React, { Component } from 'react';
import counter from './Reducer'
import {createStore} from 'redux';
import './App.css';

let store = createStore(counter);
//console.log(store.getState())


class App extends Component {
  click(){
    store.dispatch({type:'leo'});
  }
  add(){
    store.dispatch({type:'add'});
  }
  sy(){
    if(store.getState()%2==1){
       store.dispatch({type:'add'});
    }
  }
  haha(){
    setTimeout(()=>{
       store.dispatch({type:'add'});
    },1000)
  }
  render() {
    return (
      <div className="App">
        <input type='button' value='-' onClick={this.click.bind(this)}/>
        <span>{store.getState()}</span>
        <input type='button' value='+' onClick={this.add.bind(this)}/>
        <input type='button' value='呵呵' onClick={this.sy.bind(this)}/>
        <input type='button' value='哈哈' onClick={this.haha.bind(this)}/>
      </div>
    );
  }
}

export {App,store};
