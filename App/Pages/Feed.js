import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import SwipeCards from './SwipeCards';

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>All porked out</Text>
      </View>
    )
  }
}

const Cards = [
  {name: 'Babe', image: 'https://likeminded.io/pig.png'},
  {name: 'Piglet', image: 'https://likeminded.io/pig.png'},
  {name: 'Gouger', image: 'https://likeminded.io/pig.png'},
  {name: 'Snouter', image: 'https://likeminded.io/pig.png'},
  {name: 'Rooter', image: 'https://likeminded.io/pig.png'},
  {name: 'Tusker', image: 'https://likeminded.io/pig.png'},
  {name: 'Ace', image: 'https://likeminded.io/pig.png'},
  {name: 'Hamhock', image: 'https://likeminded.io/pig.png'},
  {name: 'Squigley', image: 'https://likeminded.io/pig.png'},
]

export default class Feed extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cards: Cards,
      outOfCards: false
    }
  }

  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        yupText={'Swine & Dine'}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'stretch',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    padding: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
