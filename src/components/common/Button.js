import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableHighlight onPress={onPress} style={buttonStyle} underlayColor="green">
			<Text style={textStyle}> {children} </Text>
		</TouchableHighlight>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: 'blue',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export {Button};