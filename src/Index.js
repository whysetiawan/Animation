/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';
import Greetings from './Greetings';
import Greetings2 from './Greetings2';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {  
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      isLaunched: false,
      screen: [
      <View key={1} >
        <Greetings onNext={this.onPressNext.bind(this)} />
      </View>,]
    }
  }

  onPressNext(){
    this.setState({ screen: [...this.state.screen, 
    <View key={2} >
      <Greetings2 isLaunched={() => this.props.navigation.navigate('Main')} />
    </View> ] })
  }

  componentDidUpdate(){
    if(this.state.screen.length >= 2){
      this.selected.setPage(1)
    }
  }

  render() {
    return (
      <ViewPagerAndroid
        key={this.state.screen.length < 2 ? Date.now() : this.state.screen.length}
        initialPage={0}
        style={{ flex: 1}}
        ref={selected => this.selected = selected }
        scrollEnabled={false}>
        {this.state.screen}
			</ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
