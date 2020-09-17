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

const store = createStore(
  reducers, {},
  compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
