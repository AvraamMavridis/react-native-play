import React, {Component} from 'react';
import {StyleSheet, Button, TouchableHighlight, Image} from 'react-native';

export default class MyButton extends Component {
  render() {
    const {title, label, onPress} = this.props;
    return (<TouchableHighlight onPress={onPress}>
      <Image source={require('../../assets/rect.png')} style={styles.container}>
      </Image>
    </TouchableHighlight>)
  }
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100
  }
});