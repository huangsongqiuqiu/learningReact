import React from 'react'
import ReactDOM from 'react-dom'



class Leo extends React.Component{
	constructor(){
		super();
		this.state ={
			msg:'hello reactsad!!2!'
		}
	}
	
	render(){
		return (<div>
				{this.state.msg}
			</div>)
	}
}


ReactDOM.render(<Leo/>,document.getElementById('app'))

