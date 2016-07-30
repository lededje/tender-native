import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Navigator, TouchableHighlight } from 'react-native';
import SwipeCards from './SwipeCards';
import Detail from './Detail';

import Match from './Match';

class Card extends Component {

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
  {
    name: 'Babe',
    image: 'https://likeminded.io/pigs/babe.jpg',
    description: 'Wessex Saddleback/ organic/ all natural/ clean eater/ positive thinker/ urban gardener.\n\nLong term veggie? Social meat eater? You won’t regret me in the morning, same can’t be said for the filth around me.',
    distance: '18 miles away',
    location: ''
  },
  {
    name: 'Cesar',
    image: 'https://likeminded.io/pigs/cesar.jpg',
    description: 'Large Black: 85cm tall: 800 pounds. Down to earth. Likes: my outdoor gym, Netflix and swill, winning. I’ll satisfy you but only if I find you attractive in your profile, just being honest.\n\nI’ll supply the sausage, you bring the buns. 🌭🌭🌭',
    distance: '22 miles away'
  },
  {
    name: 'Jon Hamm',
    image: 'https://likeminded.io/pigs/jon-hamm.jpg',
    description: '92cm tall, Gloucestershire Old Spots, pedigree. Impeccable manners, ISTP, host of swine and cheese nights. Quite particular about what I’m paired with.',
    distance: '38 miles away'
  },
  {
    name: 'Lorenzo',
    image: 'https://likeminded.io/pigs/lorenzo.jpg',
    description: '82cm tall. Smoke grass every day.\n\nI know when that trotline bling...\n..\n..\n..\nThat can only mean one thing.',
    distance: '25 miles away'
  },
  {
    name: 'Pattie',
    image: 'https://likeminded.io/pigs/pattie.jpg',
    description: 'Proud mama of 2 beautiful piglets. Huge foodie and baking enthusiast. Always workin’ on my snout pout. Live my life 100%, a lady in the streets but a freak in the peats. Searching for an above average big spoon.',
    distance: '21 miles away'
  },
  {
    name: 'Sciutto',
    image: 'https://likeminded.io/pigs/sciutto.jpg',
    description: '100% pork 😉 tender of loin, desperately need a ham job. Come get this dirty beast.',
    distance: '10 miles away'
  },
  {
    name: 'Snowball',
    image: 'https://likeminded.io/pigs/snowball.jpg',
    description: 'Told I have a crackling body. Your charcuterie amour? \n\n🌴 | 🙈 | 🐽 | ☀️ | 🌷 | 🌠  #baeofpigs',
    distance: '17 miles away'
  },
  {
    name: 'Carnita',
    image: 'https://likeminded.io/pigs/carnita.jpg',
    description: 'Fun loving, bubbly, got a bit of meat on me, I’m juicy have to be honest lol, I would describe my figure as thick, smooth and sensual. Life’s too short to miss out on adventures. Looking for someone who is looking for me. 😉',
    distance: '25 miles away'
  },
  {
    name: 'Henry',
    image: 'https://likeminded.io/pigs/henry.jpg',
    distance: '13 miles away',
    description: `DO NOT swipe right if you are:
  - Ambitionless
  - Dishonest
  - Capricorn
  - One of those girls who doesn’t close her mouth when she chews\n\nSorry but it just won’t work. (Catch me on Instafarm @henry_boss if you can’t get me on here)`
  },
  {
    name: 'King',
    image: 'https://likeminded.io/pigs/king.jpg',
    description: '75cm tall (apparently it matters). Pot-bellied. Hoof gazer. Holding out for someone who will treat me right, not some broad who will chew me up and spit me out. Swipe right if you agree that a thoughtful appetizer can be tastier than the main course.\n\n"I took her to a supermarket, I don’t know why but I had to start it somewhere."',
    distance: '11 miles away'
  },
  {
    name: 'Marco',
    image: 'https://likeminded.io/pigs/marco.jpg',
    description: '"A pig that doesn’t fly is just a pig"',
    distance: '30 miles away'
  },
  {
    name: 'Percy',
    image: 'https://likeminded.io/pigs/percy.jpg',
    description: 'I’ll make you orgasm in public with just one bite. Things are gonna get messy. Smother me in BBQ sauce. Lick. It. Off. That’s right, smack your lips, come back for more, move your hand faster, you want me inside you, all of me...\n\nOne more thing you should know, I’m a squealer.',
    distnace: '34 miles away'
  },
  {
    name: 'Sherry',
    image: 'https://likeminded.io/pigs/sherry.jpg',
    description: 'These cheeks were made for braising, baby... First comes the oil, naughty, toss me about in flour, turn up the heat. Let’s make things a little hot and spicy in here, cumin, paprika, whatever you like tho honey, you’re in charge.\n\nAh, the sweet sherry, my poison. Pour it in, don’t be shy. Now keep me simmering a while, just don’t tease me for too long or I might boil over...Throw me down on a bed of rice, scatter almond flakes and parsley leaves, I know what you’re thinking - I’m quite a dish. ',
    distance: '26 miles away'
  },
  {
    name: 'Suse',
    image: 'https://likeminded.io/pigs/suse.jpg',
    description: '🐷 + 💁 + 🍴 = ?\n\nNew to all this. My mother always said “don’t get left on the shelf!” so here goes...\n\nMe: Heart of gold. You: that feeling in the pit of your belly when you’re alone on a Sunday night, again, like something’s missing. You try and try to fill the hole but you can’t stop the craving, for something fresh, something that makes you feel alive.\n\n(No I do not want a threesome with you and your boyfriend. I’m hoping you won’t want to share me.)',
    distance: '16 miles away'
  },
]

export default class Feed extends Component {
  constructor (props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);

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
    console.log("nope");
  }

  handlePress (pig) {
    this.props.toRoute({
      name: pig.name,
      component: Detail,
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
      passProps: pig
    });
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
        handlePress={this.handlePress}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'stretch',
    borderColor: 'grey',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
    }
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
