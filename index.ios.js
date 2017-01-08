import React, {Component} from 'react';
import {AppRegistry, Navigator, Text} from 'react-native';
import Main from './src/components/Main';
import GameScene from './src/components/GameScene';
import routes from './src/config/routes';

export default class lekseis extends Component {

  renderScene(route, navigator) {
    switch (route.index) {
      case 0:
        return <Main navigator={navigator}/>
      case 1:
        return <GameScene navigator={navigator}/>
    }
  }

  configureScene() {
    const anims = [
      Navigator.SceneConfigs.PushFromRight,
      Navigator.SceneConfigs.FloatFromRight,
      Navigator.SceneConfigs.FloatFromLeft,
      Navigator.SceneConfigs.FloatFromBottom,
      Navigator.SceneConfigs.SwipeFromLeft,
      Navigator.SceneConfigs.HorizontalSwipeJump,
      Navigator.SceneConfigs.HorizontalSwipeJumpFromRight,
      Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft,
      Navigator.SceneConfigs.VerticalUpSwipeJump,
      Navigator.SceneConfigs.VerticalDownSwipeJump
    ]
    return anims[Math.floor(Math.random() * anims.length)];
  }

  render() {
    return (<Navigator
      initialRoute={{
      title: 'Awesome Scene',
      index: 0
    }}
      renderScene={this.renderScene}
      configureScene={this.configureScene}/>);
  }
}

AppRegistry.registerComponent('lekseis', () => lekseis);
