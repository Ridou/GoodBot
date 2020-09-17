import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import RaidDetail from './RaidDetail';
import {fetchCharacter, fetchName} from '../actions';

// Need character name to access individual raids

class RaidList extends Component {
	componentDidMount() {
		// this.props.fetchName(this.props.guildId, 93398761979514880);
		// this.props.fetchCharacter(this.props.name, 612407313474650126);
		// this.props.fetchName(612407313474650126, 93398761979514880);
		// https://goodbot.me/api/nick?id=93398761979514880&key=0c8e7d80-ee6b-4e99-9ea9-c5f0c7baf849&guildID=612407313474650126&memberID=93398761979514880
	}
	renderRaids() {
		// this.props.fetchName(this.props.guildId, 93398761979514880);
		// const config = {
		// 	headers: {Authorization: `Bearer ${this.props.accessToken}`}
		// }
		// const request = axios
		// 	.get('https://discordapp.com/api/users/@me/guilds/', config})
		// 		.then((response)=>
		// 			console.log('Request: ', response);
		// 		)
		// this.props.fetchCharacter(this.props.name, 612407313474650126);
		// if there is data
		// show all raids
		// else
		// characterselected = character raid data
		// return this.state.raidData.map(x =>
		// 	x.signups.map((i,u) =>
		// 		<RaidDetail item={i} key={u} ></RaidDetail>
		// ));
	}

	render() {
		if (this.props.accessToken === null) {
			return <Text> Loading </Text>;
		} else {
			return <View>{this.renderRaids()}</View>;
		}
	}
}

const mapStateToProps = (state) => {
	return {name: state.characters.name, accessToken: state.auth.accessToken, guildId: state.characters.guildId};
};

export default connect(mapStateToProps, {
	fetchCharacter,
	fetchName,
})(RaidList);
