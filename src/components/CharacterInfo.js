import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection} from './common';

import CharacterDetail from './CharacterDetail';

class CharacterInfo extends Component {

	renderCharacterInfo() {
		return (this.props.info.map( (item, index) => {
			return <CharacterDetail item={item} key={index} ></CharacterDetail>
		}))
	}

	render() {
		if (this.props.isSignedIn === null || this.props.info === null) {
			return <View></View>;
		} else {
			return (
				<CardSection>
				<View>{this.renderCharacterInfo()}</View>
				</CardSection>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {info: state.characters.info, isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {})(CharacterInfo);