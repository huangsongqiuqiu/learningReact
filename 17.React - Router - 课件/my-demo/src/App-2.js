import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class News extends Component{
  render(){
    return (<div>
        <h1>请您们尊重我</h1>
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521605373785&di=babd5018c37f412dc3a2a29af96a6b28&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd833c895d143ad4b3ae286d88e025aafa50f06de.jpg'/>
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
