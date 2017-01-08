import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Animated} from 'react-native';
import Button from './Button';
import routes from '../config/routes';
import {Container, Content, Card, CardItem} from 'native-base';
import * as Animatable from 'react-native-animatable';

export default class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View style={styles.card1}/>
        <View style={styles.card2}/>
        <View style={styles.card3}/>
      </View>

    );
  }
}

const cardStyle = {
    borderColor: "#313b45",
    borderRadius: 5,
    borderWidth: 1,
    minHeight: 300,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 20
  },
  card1: {
    top: 100,
    width: 340,
    zIndex: 2,
    backgroundColor: "white",
    ...cardStyle
  },
  card2: {
    top: 130,
    width: 320,
    left: 30,
    zIndex: 1,
    position: 'absolute',
    ...cardStyle
  },
  card3: {
    top: 140,
    width: 300,
    left: 40,
    zIndex: 0,
    position: 'absolute',
    ...cardStyle
  }
});
