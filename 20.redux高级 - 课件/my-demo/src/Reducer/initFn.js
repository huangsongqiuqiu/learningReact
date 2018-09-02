//counter的函数

function to(state,text){
	return state.concat([text.text])
}

function remove(state,text){
	state.splice(text,1);
	return state;
}


export {to,remove};