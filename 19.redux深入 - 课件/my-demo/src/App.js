import React, { Component } from 'react';


import {store} from './store';
import Book from './components/book'

import Counter from './components/counter'
import List from './components/list'
import './App.css';

console.log(store)



//console.log(store.getState())


class App extends Component {
  add(value){
    //store.dispatch({type:'add',text:value})
  }
  render() {
    return (
      <div className="App">
        <Counter 
            value={store.getState().counter}
            onAdd={()=>store.dispatch({'type':'counteradd'})}
            onLeo={()=>store.dispatch({'type':'leo'})}
        />

        <br/>
        <br/>
         <List
            store={store}
          />
          <Book/>
      </div>
    );
  }
}
/*

<Counter 
            value={store.getState()}
            onAdd={()=>store.dispatch({'type':'add'})}
            onLeo={()=>store.dispatch({'type':'leo'})}
        />
        <br/>
        <br/>
 <List
          store={store}
        />
*/
export default App;
