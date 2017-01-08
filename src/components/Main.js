import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Button from './Button';
import routes from '../config/routes';

export default class Main extends Component {

  onPressLearnMore()
  {
    console.info('>>>>>>>>>')
  }

  componentDidMount()
  {
    const { navigator } = this.props;
    setTimeout(() => {
      navigator.push(routes[1]);
    }, 0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/background.png')} style={styles.background}>
          <View style={styles.container}>
            <Image source={require('../../assets/title.png')} style={styles.title}></Image>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0)"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  title:{
    width: 200,
    height: 50,
    resizeMode: 'cover'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
