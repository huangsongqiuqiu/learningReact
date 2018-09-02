function createReducer(init,json){
	//json = {'add':to}

	return function reducer(state=init,action){
	//console.log(json,action)

	//({type:'add'})
	// json['add']
		if(json[action.type]){
			return json[action.type](state,action)
		}
		else{
			return state;
		}
	}
}


export default createReducer;