import React,{Component} from 'react'

class Content extends Component{
	render(){
		let aDiv = [];
		this.props.bottomVal.topValue.forEach((val,index)=>{
			//console.log(this.props.bottomVal.bottomValue[index])
			aDiv.push(<div style={{display:index==this.props.index?'block':'none'}}className="bottomBox" key={index}>{this.props.bottomVal.bottomValue[index]==undefined?'暂无数据':this.props.bottomVal.bottomValue[index]}</div>)
		})
		return (<div className='bBox'>
					{aDiv}
				</div>)
	}
}

export default Content;