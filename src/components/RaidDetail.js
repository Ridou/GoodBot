import React from 'react';
import {Text, View} from 'react-native';

const RaidDetail = ({item}) => {
	const {viewStyle, textStyle} = styles;
	if (item === null) {
		return <Text> Loading </Text>;
	} else {
		return (
			<View style={viewStyle}>
				<Text style={textStyle}>Character Name: {item.name}</Text>
				<Text style={textStyle}>Title: {item.title}</Text>
				<Text style={textStyle}>Raid: {item.raid}</Text>
				<Text style={textStyle}>Date: {item.date}</Text>
				<Text style={textStyle}>Time: {item.time}</Text>
				<Text style={textStyle}>Rules: {item.rules}</Text>
			</View>
		);
	}
};

const styles = {
	viewStyle: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: {width:0, height:2},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
	textStyle: {
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}

export default RaidDetail;
