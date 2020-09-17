import axios from 'axios';
import Config from 'react-native-config';
import _ from 'lodash';

export const signIn = (accessToken, refreshToken) => {
	return {
		type: 'SIGN_IN',
		payload: accessToken,
		refreshToken,
	};
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT',
	};
};

export const fetchCharacter = (name, guildID) => {
	return (dispatch) => {
		axios
			.get(
				'https://goodbot.me/api/info/' +
					name +
					'?id=' +
					Config.GOOD_BOT_ID +
					'&key=' +
					Config.GOOD_BOT_KEY +
					'&guildID=612407313474650126',
			)
			.then((response) => {
				const data = _.map(response.data);
				dispatch({type: 'FETCH_CHARACTER', payload: data});
			});
	};
};

export const fetchName = ({guildID, memberID}) => {
	return (dispatch) => {
		axios
			.get(
				'https://goodbot.me/api/nick?id=' +
					Config.GOOD_BOT_ID +
					'&key=' +
					Config.GOOD_BOT_KEY +
					'&guildID=612407313474650126&memberID=93398761979514880',
			)
			.then((response) => {
				dispatch({type: 'FETCH_NAME', payload: response.data.nick});
			});
	};
};

export const fetchGuildId = (accessToken) => {
	return (dispatch) => {
		axios
			.get('https://discordapp.com/api/users/@me/guilds', {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			})
			.then((response) => {
				const mapData = _.mapValues(response.data);
				const mankrikPug = _.find(mapData, {name: 'Mankrik PUGs'});
				const guildId = _.pick(mankrikPug, ['id']).id;
				console.log(guildId)
				dispatch({type: 'FETCH_GUILD', payload: guildId});
			});
	};
};

export const fetchMemberId = (accessToken, guildId) => {
	console.log('guildId ', guildId);
	console.log('accessToken', accessToken);
	axios
		.get(
			'https://discordapp.com/api/guilds/612407313474650126/members/135121610012229632',
			{
				headers: {
					Authorization: 'Bearer '+accessToken,
				}
			}
		)
		.then((response) => {
			console.log(response.nick);
		});
};

export const fetchUserId = (accessToken) => {
	axios.get('https://discordapp.com/api/users/@me',
			{
				headers: {
					Authorization: 'Bearer '+accessToken,
				},
			},
		)
		.then((response) => {
			console.log('User ID',response.data.id);
		});
}

// export const fetchGuildMember = (accessToken) => {
// 	axios.get('https://discordapp.com/api/users/@me/guilds', {
// 			headers: {
// 				Authorization: 'Bearer ' + accessToken
// 			}
// 		}).then((responseA) => 
// 				const mapData = _.mapValues(response.data);
// 				const mankrikPug = _.find(mapData, {name: 'Mankrik PUGs'});
// 				const guildId = _.pick(mankrikPug, ['id']).id;
// 				dispatch({type: 'FETCH_GUILD', payload: guildId});
// 			Promise.all([
// 				return axios.get('https://discordapp.com/api/users/@me/guilds/' + guildId + '/members',
// 						{headers: {Authorization: 'Bearer ' + accessToken}}])
// 				).then(responseB) => {
// 					console.log('guildId', responseA)
// 					console.log('memberId', responseB)
// 				}
// 		)

// };
