import {counterInit} from './initState';
import {changePic} from './allFn';

import createReducer from './../createReducer'


let tabs = createReducer(counterInit,{'changePic':changePic});

export default tabs;
/*
export default function counter(state=TabInit.a,action){
  switch(action.type){
  	case 'add':
  		return to(state,action.text)
  		break;
  	case 'remove':
  		return remove(state,action.text)
  		break
  	default :
  		return state;

  }
}
*/

//createReducer(counterInit,{'add':to})


/*
export default function counter(state=TabInit.a,action){
    if(action.type=='add'){
    	//console.log(action)
    	return add(state,action.text)
    }
    else if(action.type=='remove'){
    	
    	return remove(state,action.text)
    }
    else{
    	return state;
    }
}
*/

