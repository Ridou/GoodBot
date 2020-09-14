import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import raidReducer from './raidReducer';

export default combineReducers({
	auth: authReducer,
	raids: raidReducer
})