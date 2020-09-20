/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import RaidList from './src/components/RaidList';
import DiscordAuth from './src/components/DiscordAuth';
import {Header} from './src/components/common';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <Header headerText="GoodBot" />
          <RaidList />
          <DiscordAuth />
        </ScrollView>
      </Provider>
    );
  }
}

export default App;
