import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Button from './Button';
import routes from '../config/routes';

export default class Main extends Component {

  onPressLearnMore()
  {
    console.info('>>>>>>>>>')
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#323c46"
  }
});
