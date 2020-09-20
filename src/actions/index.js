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

export const fetchCharacterInfo = (accessToken) => {
	return async (dispatch, getState) => {
		const fetchGuildId = await axios
			.get('https://discordapp.com/api/users/@me/guilds', {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			})
			.then((response) => {
				const mapData = _.mapValues(response.data);
				const mankrikPug = _.find(mapData, {name: 'Mankrik PUGs'});
				const guildId = _.pick(mankrikPug, ['id']).id;
				dispatch({type: 'FETCH_GUILD', payload: guildId});
			});
		const gId = getState().characters.guildId;
		const fetchUserId = await axios
			.get('https://discordapp.com/api/users/@me', {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			})
			.then((response) => {
				dispatch({type: 'FETCH_USER_ID', payload: response.data.id});
			});
		const uId = getState().characters.userId;
		const fetchNick = await axios
			.get(
				'https://goodbot.me/api/nick?id=' +
					Config.GOOD_BOT_ID +
					'&key=' +
					Config.GOOD_BOT_KEY +
					'&guildID=' +
					gId +
					'&memberID=' +
					uId,
			)
			.then((response) => {
				dispatch({type: 'FETCH_NICK', payload: response.data.nick});
			});
		const nick = getState().characters.nick;
		const fetchRaid = await axios
			.get(
				'https://goodbot.me/api/info/' +
					nick +
					'?id=' +
					Config.GOOD_BOT_ID +
					'&key=' +
					Config.GOOD_BOT_KEY +
					'&guildID=' +
					gId,
			)
			.then((response) => {
				const data = response.data;
				const character = _.map(data, (x) =>
					_.pick(x, ['name', 'class', 'role']),
				);
				const signups = _.flatten(
					_.map(data, (x) => x.signups.map((y) => _.pick(y, ['player']))),
				);
				const raidData = _.flatten(
					data.map((x) => x.signups.map((y) => y.raid)),
					null,
				);
				const raids = _.map(raidData, (x, y) =>
					_.assign(x, {name: signups[y].player}),
				);
				dispatch({type: 'FETCH_CHARACTER', payload: character});
				dispatch({type: 'FETCH_RAIDS', payload: raids});
			});
	};
};

// export const testRaid = (accessToken) => {
// 	return async (dispatch, getState) => {
// 		const fetchRaid = await axios
// 			.get(
// 				'https://goodbot.me/api/info/Milagros?id=93398761979514880&key=0c8e7d80-ee6b-4e99-9ea9-c5f0c7baf849&guildID=612407313474650126'
// 			)
// 			.then((response) => {
// 				const data = response.data;
// 				const character = _.map(data, (x) =>
// 					_.pick(x, ['name', 'class', 'role']),
// 				);
// 				const signups = _.flatten(
// 					_.map(data, (x) => x.signups.map((y) => _.pick(y, ['player']))),
// 				);
// 				const raidData = _.flatten(
// 					data.map((x) => x.signups.map((y) => y.raid)),
// 					null,
// 				);
// 				const raids = _.map(raidData, (x, y) =>
// 					_.assign(x, {name: signups[y].player}),
// 				);
// 				dispatch({type: 'FETCH_CHARACTER', payload: character});
// 				dispatch({type: 'FETCH_RAIDS', payload: raids});
// 			});
// 	};
// };
