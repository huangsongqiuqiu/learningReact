import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App2 extends Component{
  render(){
    return (<Router>
      <div>
          <Link to={this.props.match.url+'/Index'}>首页</Link>
          <Link to={this.props.match.url+'/News'}>新闻页</Link>
          <Link to={this.props.match.url+'/About'}>关于我</Link>
          <Route path={this.props.match.url+'/:name'} component={App2}/>
      </div>
    </Router>)
  }
}

class App extends Component {
  render() {
   
    return (<Router>
      <div>
        <Link to='/Index'>首页</Link>
        <Link to='/News'>新闻页</Link>
        <Link to='/About'>关于我</Link>

        <Route path='/:link' component={App2}/>
      </div>
    </Router>);
  }
}

export default App;
