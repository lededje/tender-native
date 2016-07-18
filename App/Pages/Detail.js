import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Navigator, ScrollView } from 'react-native';

import Feed from './Feed';

export default class Match extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    return (

      <View style={styles.container}>            
        <ScrollView>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo est aspernatur, repudiandae provident dolorum autem qui eveniet debitis minima odio, atque eum aliquid natus beatae deleniti quas at laudantium asperiores dolorem a officia voluptates. Accusamus ipsum iusto id blanditiis obcaecati optio atque rem, corrupti doloribus nesciunt sit illum ipsam, enim, voluptates quasi nostrum consectetur fugiat deleniti, facilis dignissimos dolorem vel? Reprehenderit nihil eum, praesentium, incidunt soluta consequatur rerum distinctio minima, iusto quibusdam, exercitationem saepe odit commodi? Sequi neque repellat nemo voluptatum, ullam ipsa officiis consectetur optio accusamus dolorum consequatur obcaecati id iusto fugit, culpa molestiae, maiores. Ipsam voluptatibus, nemo distinctio!</Text>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({


});
