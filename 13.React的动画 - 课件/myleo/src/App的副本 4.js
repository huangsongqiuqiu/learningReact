import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './App.css';

//console.log(spring)
class App extends Component {
  constructor(){
    super();
    this.state={
      v:false,
      start:'中国',
      myArr:['中国','瑞士','印度','新西兰']
    }
  }

  css(){
    return `
      .myTab{width:200px;height:40px;border:1px solid black;text-align:center;line-height:40px;margin:40px;position:relative;}
      .myTab ul{width:100%;border:1px solid black;top:40px;left:-1px;position:absolute;border-bottom:none;overflow:hidden;transition:.7s}
      .myTab ul li{width:100%;height:40px;border-bottom:1px solid black;cursor:pointer;transition:.7s}
      .myTab ul li:hover{background:black;color:white;}
    `
  }
  click(){
    this.setState({
      v:!this.state.v
    })
  }

 
  render() {
    //let oDiv = [this.state.v?<div key={1} className='leo'></div>:'']
    let aLi = [];
    this.state.myArr.forEach((v,i)=>{
      aLi.push(<li key={i}>{v}</li>)
    })
    return (
      <div className="App">
        <style dangerouslySetInnerHTML={{__html:this.css()}}/>
        <div className='myTab' onClick={this.click.bind(this)}>
          {this.state.start}
          <ul style={{height:this.state.v?this.state.myArr.length*40+this.state.myArr.length:0}}>
            {aLi}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
