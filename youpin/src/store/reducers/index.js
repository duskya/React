import {
	combineReducers
} from 'redux';

import productReducer from './product/reducer';
import useReducer from './user/reducer'

const reducer = combineReducers({
	product: productReducer,
	user:useReducer
});
export default reducer;