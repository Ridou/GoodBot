import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';

import RaidDetail from './RaidDetail';
import {testRaid, fetchCharacterInfo} from '../actions';

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
		// console.log('Name: ', this.props.nick)
		// console.log('GuildId: ', this.props.guildId)
		// this.props.testRaid(this.props.nick, this.props.guildId)
		// console.log(this.props.raids)
		// return this.props.raids.map((raid) => console.log(raid))
		// if there is data
		// show all raids
		// else
		// characterselected = character raid data
		// return this.props.raids.map(x =>
		// 	x.signups.map((i,u) =>
		// 		<RaidDetail item={i} key={u} ></RaidDetail>
		// ));
	}

	render() {
		if (this.props.isSignedIn === null || this.props.nick === null || this.props.guildId === null) {
			return <Text> Please login to Discord </Text>;
		} else {
			return <View>{this.renderRaids()}</View>;
		}
	}
}

const mapStateToProps = (state) => {
	return {raids: state.raids, isSignedIn: state.auth.isSignedIn, nick: state.characters.nick, guildId: state.characters.guildId};
};

export default connect(mapStateToProps, {testRaid, fetchCharacterInfo})(RaidList);
