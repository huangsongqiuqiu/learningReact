import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Sport extends Component{
  render(){

    console.log(this.props.match.params.leo)
    
    if(this.props.match.params.leo=='football'){
      var a = '我是足球'
    }
    else if (this.props.match.params.leo=='basketball'){
      var a = '我是篮球'
    }
    else if(this.props.match.params.leo=='run'){
      var a = '我是跑步'
    }
   // console.log(a)
    
    return (<div>{a}</div>)
  }
}

class News extends Component{
  render(){
    console.log(this.props.match)
    return (<div>
        <Router>
          <div>
            <ul>
              <li><Link to={this.props.match.url+'/football'}>足球</Link></li>
              <li><Link to={this.props.match.url+'/basketball'}>篮球</Link></li>
              <li><Link to={this.props.match.url+'/run'}>跑步</Link></li>
            </ul>
            <Route path='/News/:leo' component={Sport} />
          </div>
        </Router>
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
        <Link to='/'>首页</Link>
        <Link to='/News'>新闻页</Link>
        <Link to='/About'>关于我</Link>

        <Route exact path='/' component={Index}/>
        <Route path='/News' component={News}/>
        <Route path='/About' component={About}/>
      </div>
    </Router>);
  }
}

export default App;
