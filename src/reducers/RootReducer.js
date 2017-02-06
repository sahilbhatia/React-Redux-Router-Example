import { combineReducers } from 'redux';
import sessionReducer from './SessionReducer.js';

const rootReducer = combineReducers({ sessionReducer });

export default rootReducer;
