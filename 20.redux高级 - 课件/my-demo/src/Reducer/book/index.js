import {counterInit} from './initState';
import {book_to} from './allFn';

import createReducer from './../createReducer'


let book = createReducer(counterInit,{'book_to':book_to});

export default book;
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

