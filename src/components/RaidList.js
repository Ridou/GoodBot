import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';

import RaidDetail from './RaidDetail';
import {IntroLogo} from '../images';

// Need character name to access individual raids

class RaidList extends Component {
	componentDidMount() {
		// this.props.testRaid()
		// this.props.fetchName(this.props.guildId, 93398761979514880);
		// this.props.fetchCharacter(this.props.name, 612407313474650126);
		// this.props.fetchName(, 93398761979514880);
		// https://goodbot.me/api/nick?id=93398761979514880&key=0c8e7d80-ee6b-4e99-9ea9-c5f0c7baf849&guildID=612407313474650126&memberID=93398761979514880
	}
	renderRaids() {
		return this.props.raids.map((item, key) => {
			return <RaidDetail item={item} key={key}></RaidDetail>;
		});
	}

	render() {
		const {viewStyle, logoStyle} = styles;
		if (this.props.isSignedIn === null || this.props.raids === null) {
			return (
				<View style={viewStyle}>
					<Image style={logoStyle} source={IntroLogo} />
				</View>
			);
		} else {
			return <View>{this.renderRaids()}</View>;
		}
	}
}

const mapStateToProps = (state) => {
	return {raids: state.characters.raids, isSignedIn: state.auth.isSignedIn};
};

const styles = {
	logoStyle: {
		alignSelf: 'stretch', flex: 1,width : 'auto'
	},
	viewStyle: {
		width: '100%', height: 750
	},
};

export default connect(mapStateToProps, {})(RaidList);
