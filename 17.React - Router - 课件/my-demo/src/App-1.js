import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class News extends Component{
  render(){
    return (<div>
        <h1>请您们尊重我</h1>
        <span>我是新闻页的router</span>
      </div>)
  }
};

const About = () =>{

  return ( <div>
    <h1>我是About</h1>
    <span>我是关于我的router</span>
  </div>)
 
}
function Index(){
  return (<div>hehehe</div>)
}

class App extends Component {
  render() {
    return (<Router>
      <div>
        <Link to='/Index'>首页</Link>
        <Link to='/News'>新闻页</Link>
        <Link to='/About'>关于我</Link>

        <Route path='/Index' component={Index}/>
        <Route path='/News' component={News}/>
        <Route path='/About' component={About}/>
      </div>
    </Router>);
  }
}

export default App;
