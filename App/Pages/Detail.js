import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Navigator, ScrollView, Dimensions } from 'react-native';

import Feed from './Feed';

export default class Match extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    var {height, width} = Dimensions.get('window');

    return (
      <View>
        <Image style={styles.image} source={{uri: this.props.image}} />
        <ScrollView style={[styles.container, {
            height: height - 250 - 64
          }]}>
          <View style={styles.row}>
            <View style={[styles.half]}>
              <Text style={[styles.font, styles.name]}>{this.props.name}</Text>
            </View>
            <View style={[styles.half]}>
              <Text style={[styles.font, styles.textRight, styles.location]}>{'Riverside Farm'}</Text>
              <Text style={[styles.font, styles.textRight, styles.distance]}>{this.props.distance}</Text>
            </View>
          </View>
          <Text>{this.props.description + '\n'}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  half: {
    flex: 1,
  },
  name: {
    fontSize: 32,
  },
  textRight: {
    textAlign: 'right'
  },
  location: {
    fontSize: 16,
  },
  distance: {
    fontSize: 16,
    opacity: 0.6,
  },
  container: {
    padding: 20,
    flex: 1,
  },
  font: {
    fontFamily: 'CircularStd-Medium',
  }
});
