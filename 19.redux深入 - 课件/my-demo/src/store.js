import Reducer from './Reducer';
import {createStore} from 'redux';
let store = createStore(Reducer);
export {store};