import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

//compose 组成 Enhancer 增强
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancer(applyMiddleware(thunk))
const store =createStore(reducer,enhancer);
export default store