import React, { Component } from 'react';

class Counter extends Component{
	hehe(value,onAdd){
		if(value%2==1){
			onAdd();
		}
	}
	setTime(onAdd){
		setTimeout(onAdd,1000);
	}
	render(){
		let {value,onAdd,onLeo} = this.props
		return (<div>
			<input type='button' value='-'  onClick={onLeo}/>
        	<span>{value}</span>
      	    <input type='button' value='+' onClick={onAdd}/>
        	<input type='button' value='呵呵' onClick={this.hehe.bind(this,value,onAdd)}/>
        	<input type='button' value='哈哈' onClick={this.setTime.bind(this,onAdd)}/>
		</div>)
	}
}

export default Counter;