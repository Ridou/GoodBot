import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import RaidDetail from './RaidDetail';
import Config from 'react-native-config';

// Need character name to access individual raids

class RaidList extends Component {
	state = {
		raidData: null,
	};
	componentDidMount() {
		axios
			.get(
				'https://goodbot.me/api/signups/Setback?id='+Config.GOOD_BOT_ID+'&key='+Config.GOOD_BOT_KEY,
			)
			.then((response) => this.setState({raidData: response.data.data}));
	}

	renderRaids() {
		return this.state.raidData.map((item, index) => 
			<RaidDetail key={index} item={item}>{item.RaidTitle}</RaidDetail>
		);
	}

	render() {
		if (this.state.raidData === null) {
			return <Text> Loading </Text>;
		} else {
			return <View>{this.renderRaids()}</View>;
		}
	}
}

export default RaidList;
