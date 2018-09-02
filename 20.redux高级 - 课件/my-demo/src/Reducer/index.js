import {combineReducers} from 'redux';
import counter from './Counter';
import book from './book/index';
import list from './List';
import tabs from './tabs';

export default combineReducers({
	counter,
	list,
	book,
	tabs
})