import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {authorize, refresh, revoke} from 'react-native-app-auth';
import Config from 'react-native-config';

import {signIn, signOut, fetchCharacterInfo} from '../actions';
import {Button} from './common';
import {DiscordLogin} from '../images';

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
			this.props.fetchCharacterInfo(result.accessToken);
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
		const {viewStyle, buttonStyle, imageStyle} = styles;
		if (this.props.isSignedIn) {
			return (
				//If User is Signed in, make a hamburger menu with option to sign out
				<View style={viewStyle}>
					<Button onPress={() => this._onRevokeDiscord()}>
						<Text> Sign Out </Text>
					</Button>
				</View>
			);
		} else {
			return (
				<View style={viewStyle}>
					<Button style={buttonStyle} onPress={() => this._onLoginDiscord()}>
						<Image style={imageStyle} source={DiscordLogin} />
					</Button>
				</View>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn,
		accessToken: state.auth.accessToken,
		refreshToken: state.auth.refreshToken,
	};
};

const styles = {
	viewStyle: {
		width: '100%',
		position: 'absolute',
		flex: 1,
		bottom: 10,
		flexDirection: 'column',
		height: 80,
		alignItems: 'center',
		justifyContent: 'center'

	},
	imageStyle: {
		flex: 1.9,
		height: 0,
		justifyContent: 'center',
		resizeMode: 'contain',
	},
};

export default connect(mapStateToProps, {signIn, signOut, fetchCharacterInfo})(
	DiscordAuth,
);
