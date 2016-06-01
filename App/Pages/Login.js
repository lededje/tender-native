/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Navigator
} from 'react-native';

import Feed from './Feed';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.state = { pressStatus: false };
    this._onHideUnderlay = this._onHideUnderlay.bind(this);
    this._onShowUnderlay = this._onShowUnderlay.bind(this);
    this.login = this.login.bind(this);
  }

  static propTypes = {
    toRoute: PropTypes.func.isRequired
  };

  _onHideUnderlay () {
    this.setState({ pressStatus: false });
  }

  _onShowUnderlay () {
    this.setState({ pressStatus: true });
  }

  login (...args) {
    console.log('Button pressed');
    this.props.toRoute({
      name: 'tender',
      component: Feed,
      sceneConfig: Navigator.SceneConfigs.PushFromRight
    });
  }

  render () {
    const { pressStatus } = this.state;
    console.log(styles);
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-heart.png')} />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>tender</Text>
        </View>

        <TouchableHighlight
          onHideUnderlay={this._onHideUnderlay}
          onShowUnderlay={this._onShowUnderlay}
          style={pressStatus ? styles.buttonPress : styles.button}
          onPress={this.login}
          underlayColor='#ffffff'>
          <Text
            style={pressStatus ? styles.buttonTextPress : styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    resizeMode: 'contain'
  },
  logoContainer: {
    paddingTop: 5,
    height: 220,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fc4e61',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTextContainer: {
    marginTop: 30,
    height: 100,
    alignItems: 'center'
  },
  mainText: {
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    fontSize: 50
  },
  button: {
    // height: 45,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center'
  },

  buttonPress: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },

  buttonText: {
    fontFamily: 'CircularStd-Medium',
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 5,
    fontSize: 20
  },

  buttonTextPress: {
    fontFamily: 'CircularStd-Medium',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 5,
    fontSize: 20,
    color: '#fc4e61'
  }
});

export default LoginPage;
