import React from 'react'
import ReactDOM from 'react-dom'

import Title from './Title'
import Content from './Content'
require('./tabCss.css');

let tabJson = {
	topValue:['tab1','tab2','tasdasdab3','tab4'],
	bottomValue:['tab1-context','tab2-context','tab3-context']
}

class Tab extends React.Component{
	constructor(){
		super();
		this.state ={
			index:0
		}
	}
	change(v){
		this.setState({
			index:v
		})
	}
	render(){
		return (<div className='outBox'>
				<Title topVal={this.props.val.topValue} index={this.state.index} change={this.change.bind(this)}/>
				<Content bottomVal={this.props.val} index={this.state.index}/>
			</div>)
	}
}


ReactDOM.render(<Tab val={tabJson}/>,document.getElementById('app'))
