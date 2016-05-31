/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Router from 'react-native-simple-router';

import LoginPage from './App/Pages/Login';

const firstRoute = {
  component: LoginPage,
  noStatusBar: true,
  hideNavigationBar: true,
  trans: true
};

class TenderApp extends Component {
  render () {
    return (
      <Router
        firstRoute={firstRoute}
      />
    );
  }
};

AppRegistry.registerComponent('tender', () => TenderApp);
