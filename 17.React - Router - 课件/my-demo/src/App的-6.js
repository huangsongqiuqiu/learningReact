import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



class Book extends Component{
  constructor(){
    super()
    this.state={
      msg:''
    }
  }
  componentDidMount(){
    $.ajax({
      url:'http://localhost:2139/book',
      data:{
        id:this.props.match.params.id
      },
      success:function(data){
        //console.log(this)
        //console.log(data)
        this.setState({
          msg:data.data
        })
      }.bind(this)
    })
  }
  componentDidUpdate(){
    $.ajax({
      url:'http://localhost:2139/book',
      data:{
        id:this.props.match.params.id
      },
      success:function(data){
        //console.log(this)
        //console.log(data)
        this.setState({
          msg:data.data
        })
      }.bind(this)
    })
  }
  render(){
    
   // console.log(this.props.match.params.id)
    return (<div dangerouslySetInnerHTML={{__html:this.state.msg}}></div>)
  }
}

class App extends Component {
  render() {
   
    return (<Router>
      <div>
        <Link to='/001'>废材狂后，魔君太腹黑</Link>
        <Link to='/002'>甜婚</Link>
        <Link to='/003'>重生之军中才女</Link>

        <Route path='/:id' component={Book}/>
      </div>
    </Router>);
  }
}

export default App;
