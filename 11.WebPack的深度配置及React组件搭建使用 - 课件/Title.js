import React,{Component} from 'react'

class Title extends Component{
	render(){
		let oLi = [];
		this.props.topVal.forEach((val,index)=>{
			oLi.push(<li className={index==this.props.index?'active':''} key={index} onMouseOver={this.props.change.bind(val,index)}>{val}</li>)
		});
		return (<div className='topBox'>
			<ul >
				{oLi}
			</ul>

		</div>)
	}
}

export default Title;