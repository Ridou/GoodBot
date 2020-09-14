//fetch raidData

//create raid

//edit raid

//delete raid

//signed in
export const signIn = (userId) => {
	return {
		type: 'SIGN_IN',
		payload: userId,
	};
};

//signed out
export const signOut = () => {
	return {
		type: 'SIGN_OUT',
	};
};
