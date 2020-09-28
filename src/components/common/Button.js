import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle} underlayColor="green">
			{children}
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		alignSelf: 'center',
		justifyContent: 'center'
	}
};

export {Button};
