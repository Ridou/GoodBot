import _ from 'lodash'

const defaultState = {
	name: null,
	guildId: null
};

const characterReducer = (state = defaultState, action) => {
	console.log('action',action);
    switch (action.type) {
		case 'FETCH_CHARACTER':
			return {
				...state, ...(_.mapKeys(action.payload,'id'))
			};
		case 'FETCH_NAME':
			return {
				...state, name: action.payload
			}
		case 'FETCH_GUILD':
			return {
				...state, guildId: action.payload
			}

        default:
            return state;
    }
};

export default characterReducer;
