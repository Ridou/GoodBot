import _ from 'lodash';

const defaultState = {
	nick: null,
	guildId: null,
	userId: null,
	info: null,
	raids: null,
};

const characterReducer = (state = defaultState, action) => {
	console.log('action: ', action);
	switch (action.type) {
		case 'FETCH_NICK':
			return {
				...state,
				nick: action.payload,
			};
		case 'FETCH_GUILD':
			return {
				...state,
				guildId: action.payload,
			};
		case 'FETCH_USER_ID':
			return {
				...state,
				userId: action.payload,
			};
		case 'FETCH_CHARACTER':
			return {
				...state,
				info: action.payload,
			};
		case 'FETCH_RAIDS':
			return {
				...state,
				raids: action.payload,
			};
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
		case 'DELETE_RAID':
			return _.omit(state, action.payload);

		default:
			return state;
	}
};

export default characterReducer;
