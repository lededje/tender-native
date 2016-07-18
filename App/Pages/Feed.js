import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Navigator, TouchableHighlight } from 'react-native';
import SwipeCards from './SwipeCards';

import Match from './Match';

class Card extends Component {

  goToDetail() {
    alert('rawr');
  }

  render() {
    return (
      <View style={styles.card} dataUrl={this.props.image}>
        <Image style={styles.thumbnail} ref="image" source={{uri: this.props.image}} />
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
  // {name: 'Babe', image: 'https://likeminded.io/pigs/babe.jpg'},
  // {name: 'Cesar', image: 'https://likeminded.io/pigs/cesar.jpg'},
  // {name: 'Jon Hamm', image: 'https://likeminded.io/pigs/jon-hamm.jpg'},
  // {name: 'Lorenzo', image: 'https://likeminded.io/pigs/lorenzo.jpg'},
  // {name: 'Pattie', image: 'https://likeminded.io/pigs/pattie.jpg'},
  // {name: 'Sciutto', image: 'https://likeminded.io/pigs/sciutto.jpg'},
  // {name: 'Snowball', image: 'https://likeminded.io/pigs/snowball.jpg'},
  // {name: 'Carnita', image: 'https://likeminded.io/pigs/carnita.jpg'},
  // {name: 'Henry', image: 'https://likeminded.io/pigs/henry.jpg'},
  // {name: 'King', image: 'https://likeminded.io/pigs/king.jpg'},
  // {name: 'Marco', image: 'https://likeminded.io/pigs/marco.jpg'},
  // {name: 'Percy', image: 'https://likeminded.io/pigs/percy.jpg'},
  // {name: 'Sherry', image: 'https://likeminded.io/pigs/sherry.jpg'},
  // {name: 'Suse', image: 'https://likeminded.io/pigs/suse.jpg'}
  {name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  {name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
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

    if(Math.floor(Math.random()*100) % 3 === 0) {
      this.props.toRoute({
        name: '',
        component: Match,
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
        passProps: card
      });
    }

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

        handleYup={this.handleYup.bind(this)}
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
