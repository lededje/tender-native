/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text } from 'react-native';

import Router from 'react-native-simple-router';

import Login from './App/Pages/Login';

const firstRoute = {
  name: '',
  component: Login,
};

class TenderApp extends Component {
  render () {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={backButtonComponent}
      />
    );
  }
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fc4e61',
  },
  back: {
    fontSize: 40,
    color: '#fff',
    marginLeft: 5
  }
});

const backButtonComponent = () => <Text style={styles.back}>×</Text>

AppRegistry.registerComponent('tender', () => TenderApp);
