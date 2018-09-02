//counter的函数

function changePic(state,text){
	//console.log(state)
	let newArr=[];
	let num = state.length;
	for(var i = 0;i < num;i++){
		//i = 0 0 -3
		//i = 1 0 -2
		//i = 2 0 -1
		//i = 0 0 -1
		newArr.push(state.splice(parseInt(Math.random()*state.length),1));
	}
	for(var i = 0;i < newArr.length;i++){
		state.push(newArr[i][0])
	}
	return state;
}


export {changePic};