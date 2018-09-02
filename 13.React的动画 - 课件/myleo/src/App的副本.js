import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      myArr:['myInput']
    }
  }
  focus(){
    this.setState({
      myArr:['myInput','active']
    })
  }
  blur(){
    this.setState({
      myArr:['myInput']
    })
  }
  render() {
    return (
      <div className="App">
        <input className={this.state.myArr.join(' ')} onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}/>
      </div>
    );
  }
}

export default App;
