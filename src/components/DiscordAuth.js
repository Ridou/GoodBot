import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';
import {authorize, refresh, revoke} from 'react-native-app-auth';
import Config from 'react-native-config';
import {Button} from './common';

config = {
	clientId: Config.CLIENT_ID,
	clientSecret: Config.CLIENT_SECRET,
	redirectUrl: 'com.PreBot://redirect',
	scopes: ['email', 'identify'],
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
			console.log({result});
			this.props.signIn(result.accessToken);
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
			tokenToRevoke: this.props.userId,
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
	return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userId};
};

export default connect(mapStateToProps, {signIn, signOut})(DiscordAuth);
