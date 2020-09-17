import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import raidReducer from './raidReducer';
import characterReducer from './characterReducer';

export default combineReducers({
	auth: authReducer,
	raids: raidReducer,
	characters: characterReducer
})