const defaultState = {
	isSignedIn: null,
	userId: null,
	accessToken: null,
	refreshToken: null
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				...state, isSignedIn: true, accessToken: action.payload, refreshToken: action.payload
			};
		case 'SIGN_OUT':
			return {
				...state, isSignedIn: false, accessToken: null, refreshToken: null
			};

		default:
			return state;
	}
};

export default authReducer;