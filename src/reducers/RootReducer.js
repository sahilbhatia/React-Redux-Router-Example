import { combineReducers } from 'redux';
import sessionReducer from './SessionReducer.js';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ sessionReducer, routing: routerReducer });

export default rootReducer;
