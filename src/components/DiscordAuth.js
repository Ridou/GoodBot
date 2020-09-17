import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {signIn, signOut, fetchMemberId, fetchGuildId, fetchUserId} from '../actions';
import {authorize, refresh, revoke} from 'react-native-app-auth';
import Config from 'react-native-config';
import {Button} from './common';

config = {
	clientId: Config.CLIENT_ID,
	clientSecret: Config.CLIENT_SECRET,
	redirectUrl: 'com.PreBot://redirect',
	scopes: ['guilds', 'identify'],
	serviceConfiguration: {
		authorizationEndpoint: 'https://discord.com/api/oauth2/authorize',
		tokenEndpoint: 'https://discordapp.com/api/oauth2/token',
		revocationEndpoint: 'https://discordapp.com/api/oauth2/token/revoke',
	},
};

class DiscordAuth extends Component {
	async _onLoginDiscord() {
		try {
			const result = await authorize(config);
			// this.props.fetchUserId(result.accessToken);
			// this.props.fetchGuildMember(result.accessToken)
			// this.props.fetchGuildId(result.accessToken);
			// this.props.fetchMemberId(result.accessToken, '612407313474650126')
			this.props.signIn(result.accessToken, result.refreshToken);
		} catch (error) {
			console.log('Request error', error);
		}
	}
	async _onRefreshDiscord() {
		try {
			const refreshedState = await refresh(config, {
				refreshToken: result.refreshToken,
			});
		} catch (error) {
			console.log('error', error);
		}
	}
	async _onRevokeDiscord() {
		await revoke(config, {
			tokenToRevoke: this.props.accessToken,
			tokenToRevoke: this.props.refreshToken,
			sendClientId: true,
		});
		this.props.signOut();
	}

	render() {
		if (this.props.isSignedIn) {
			return (
				<View>
					<Button onPress={() => this._onRevokeDiscord()}>Sign Out</Button>
				</View>
			);
		} else {
			return (
				<View>
					<Button onPress={() => this._onLoginDiscord()}>Sign In</Button>
				</View>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {isSignedIn: state.auth.isSignedIn, accessToken: state.auth.accessToken, refreshToken: state.auth.refreshToken};
};

export default connect(mapStateToProps, {signIn, signOut, fetchMemberId, fetchGuildId, fetchUserId})(DiscordAuth);
