import React,{Component} from "react";

class PicTab extends Component{
	constructor(){
		super();
		this.state={
			rotate:[],
			left:[],
			top:[],
			zIndex:[],
			index:0,
			rotateY:[]
		}
	}
	componentDidMount(){
		this.random();
	}
	random(needI){
		let newRotate = [],newLeft=[],newTop=[],newZindex=[],newRotateY=[];
		//console.log(needI)
		this.props.PicJson.picUrl.forEach((v,i)=>{
			newRotateY.push(0);
			if(i == needI){
				newRotate.push('0');
				newLeft.push('calc(50% - 170px)');
				newTop.push('10%');
				newZindex.push(30);
			}
			else{
				newRotate.push(Math.random()*-720+360);
				newTop.push(Math.random()*window.innerHeight-208);
				newLeft.push(Math.random()*window.innerWidth-170);
				newZindex.push(i);
			}
		});
		this.setState({
			rotate:newRotate,
			top:newTop,
			left:newLeft,
			zIndex:newZindex,
			rotateY:newRotateY
		});
	}
	click(i,e){
		if(e.target.classList.contains('active')){
			if(e.target.classList.contains('bActive')){
				e.target.classList.remove('bActive');
				this.state.rotateY.splice(i,1,0);
				//console.log(this.state.rotate)
				
				
			}
			else{
				e.target.classList.add('bActive');
				//console.log(i)
				//this.refs.myUl.children[i].classList.add('active');
				this.state.rotateY.splice(i,1,180);
				//console.log(this.state.rotate)
				
				
			}
			this.setState({
				rotateY:this.state.rotateY
			})
			
			
		}
		else{
			this.random(i);
			this.setState({
				index:i
			});
		}
		
	}
	render(){
		let aLi = [],bAli = [];
		this.props.PicJson.picUrl.forEach((v,i)=>{
			aLi.push(<li key={i} style={{transform:'perspective(800px) rotateY('+this.state.rotateY[i]+'deg) rotate('+this.state.rotate[i]+'deg)',left:this.state.left[i],top:this.state.top[i],transition:Math.random()*0.4+0.3+'s',zIndex:this.state.zIndex[i]}}>
				<div className='zm'><img src={v}/><div className='textNode'>{this.props.PicJson.text[i]}</div></div>
				<div className='bm'>{this.props.PicJson.bText[i]}</div>
			</li>);
			bAli.push(<li key={i} className={i==this.state.index?'active':''} onClick={this.click.bind(this,i)}></li>)
		});
		return (<div>
			<ul className='myUl' ref='myUl'>
				{aLi}
			</ul>
			<ol className='myOl'>
				{bAli}
			</ol>

		</div>)
	}
}

export default PicTab;