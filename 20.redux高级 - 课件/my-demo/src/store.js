import Reducer from './Reducer';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
let store = createStore(Reducer,applyMiddleware(thunk,leo));
export {store};


function leo({getState}){
	return function (dispatch){
		return function(action){
			/*
			if(action.type=='counteradd'){
				dispatch(action)
			}
			else{
				console.log('你不合法')
			}
			*/
			dispatch(action)
		}
	}	

}