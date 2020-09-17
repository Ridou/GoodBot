import _ from 'lodash'
import {FETCH_RAIDS} from '../actions';

const raidReducer = (state = {}, action) => {
	switch (action.type) {
		case 'EDIT_RAID':
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case 'CREATE_RAID':
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case 'FETCH_RAID':
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case 'FETCH_RAIDS':
			return {
				...state, ..._.mapKeys(action.payload, 'id')
			};
		case 'DELETE_RAID':
			return _.omit(state, action.payload);

		default:
			return state;
	}
};

export default raidReducer;
