import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Navigator } from 'react-native';

import Feed from './Feed';

export default class Match extends Component {

  constructor (props) {
    super(props);
    this.state = { pressStatus: false };
    this._onHideUnderlay = this._onHideUnderlay.bind(this);
    this._onShowUnderlay = this._onShowUnderlay.bind(this);
    this.back = this.back.bind(this);
  }

  _onHideUnderlay () {
    this.setState({ pressStatus: false });
  }

  _onShowUnderlay () {
    this.setState({ pressStatus: true });
  }

  back () {
    this.props.toBack();
  }

  render () {

    const { pressStatus } = this.state;

    return (

      <View style={styles.container}>
        
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-heart.png')} />
        </View>

        <View style={styles.matchContainer}>
          <Image style={styles.matchImage} source={require('../assets/user.png')} />
          <Image style={styles.matchImage} source={{uri: this.props.image}} />
        </View>
        
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>You've Pulled Pork!</Text>
        </View>

        <TouchableHighlight
          onHideUnderlay={this._onHideUnderlay}
          onShowUnderlay={this._onShowUnderlay}
          style={pressStatus ? styles.buttonPress : styles.button}
          onPress={this.back}
          underlayColor='#ffffff'>
          <Text
            style={pressStatus ? styles.buttonTextPress : styles.buttonText}>
            Keep Porking
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  matchContainer: {
    paddingTop: 5,
    height: 150,
    alignItems: 'center',
    flexDirection: 'row'
  },
  matchImage: {
    flex: 1,
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 75,
    margin: 5
  },

  logo: {
    flex: 1,
    resizeMode: 'contain'
  },
  logoContainer: {
    paddingTop: 5,
    height: 150,
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
    fontSize: 35
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
