import React, { Component } from 'react';

class List extends Component{
	ChildAdd(e){
		//console.log()
		//this.props.add(this.refs.input.value)
		this.props.store.dispatch({type:'add',text:this.refs.input.value})
	}
	remove(i){
		this.props.store.dispatch({type:'remove',text:i})
	}
	render(){
		let store = this.props.store;
		console.log(store)
		let aLi = [];
		store.getState().forEach((v,i)=>{
			aLi.push(<li key={i} onClick={this.remove.bind(this,i)}>{v}</li>)
		})
		return (<div>
			<input type='text' ref='input'/>
			<input type='button' value='add' onClick={this.ChildAdd.bind(this)}/>
			<ul>{aLi}</ul>
		</div>)
	}
}

export default List;