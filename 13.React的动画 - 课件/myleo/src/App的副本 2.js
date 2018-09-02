import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import './App.css';

//console.log(CSSTransitionGroup)
class App extends Component {
  constructor(){
    super();
    this.state={
      v:true
    }
  }

  css(){
    return `
      .leo{width:200px;height:200px;background:black;}

      .leo-enter{
        opacity:0;margin-left:300px;
      }
      .leo-enter-active{
        opacity:1;margin-left:0;
        transition:.7s
      }
      .leo-leave{
        opacity:1
      }
      .leo-leave-active{
        background:green;
        opacity:0;transition:.7s
      }
      .leo-appear{
        opacity:0;background:red;
      }
      .leo-appear-active{
        opacity:1;background:black;
        transition:.7s;
      }
    `
  }
  click(){
    this.setState({
      v:!this.state.v
    })
  }

 
  render() {
    let oDiv = [this.state.v?<div key={1} className='leo'></div>:'']

    return (
      <div className="App">
        <style dangerouslySetInnerHTML={{__html:this.css()}}/>
        <input type='button' value='切换' onClick={this.click.bind(this)}/>
        <CSSTransitionGroup
          transitionName='leo'
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
          transitionAppear={true}
          transitionAppearTimeout={700}
        >
          {oDiv}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
