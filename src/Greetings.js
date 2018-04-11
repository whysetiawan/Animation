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
  Animated,
  Easing
} from 'react-native';
import LottieAnimations from 'lottie-react-native';
import styles from '../components/style';
import { Button } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Greetings extends Component {

  constructor(){
    super();

    this.state = {
      finished: false
    }

    this.animateText = new Animated.Value(-500);
    this.animateEmoticon = new Animated.Value(0);
    this.animateBackground = new Animated.Value(0);
    this.animateProgress = new Animated.Value(0);
    this.easingOut = this.easingOut.bind(this)
  }

  componentDidMount(){
    this.easingIn();
  }

  easingIn(){
    Animated.parallel([
      Animated.timing(this.animateText, {
        duration: 1000,
        easing: Easing.in(Easing.bounce),
        toValue: 0
      }),
      Animated.timing(this.animateEmoticon, {
        duration: 2500,
        toValue: 1,
        delay: 500
      }),
      Animated.timing(this.animateBackground, {
        toValue: 400,
        duration: 2000,
      }),
    ]).start();
  }

  easingOut(){
    
    Animated.sequence([
      
      Animated.timing(this.animateProgress, {
        toValue: 1,
        duration: 3000
      }),
      Animated.parallel([
        Animated.timing(this.animateText, {
          duration: 1000,
          easing: Easing.in(Easing.bounce),
          toValue: -500
        }),
        Animated.timing(this.animateEmoticon, {
          duration: 1500,
          toValue: 0,
        }),
        Animated.timing(this.animateBackground, {
          toValue: 0,
          duration: 1500,
        })
      ])
    ]).start(() => {
      this.setState({ finished: true }, () => {
        Animated.timing(this.animateProgress, {
          toValue: 1,
          duration: 1500
        }).start(() => {
          this.props.onNext();
        })
      })
    });
  }

  render() {
    const backgroundColor = this.animateBackground.interpolate({
      inputRange: [0, 400],
      outputRange: ['#f5f6fa', '#0097e6']
    })    
    const color = this.animateEmoticon.interpolate({
      inputRange: [0, 1],
      outputRange: ['#2f3640', '#ffffff']
    })
    return (
      <Animated.View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Animated.Text style={[styles.welcome, { color: color, transform: [{ translateY: this.animateText }] }]}>
          Hello People!
        </Animated.Text>
        <LottieAnimations
          source={require('../assets/animations/emoji_wink.json')}
          progress={this.animateEmoticon}
          style={{ width:'100%', height:'20%' }} />
        <Animated.Text style={[styles.instructions, { color: color }]}>
          My Name is Wahyu Setiawan
        </Animated.Text>
        <Animated.Text style={[styles.instructions, { color: color }]}>
          This app is contain about My Curriculum Vitae
        </Animated.Text>
        <Animated.Text style={[styles.instructions, { color: color }]}>
          Press the button bellow to continue
        </Animated.Text>
        <Animated.View style={{ width:'100%', opacity: this.animateEmoticon }} >
          <Button
            containerViewStyle={{ width:'90%', marginTop:'15%' }}
            buttonStyle={{ width:'100%', justifyContent:'center' }}
            backgroundColor={'#ffffff'}
            onPress={this.easingOut}
            title='Next'
            textStyle={[styles.instructions, { fontSize:14, color:'#0097e6' }]}          
          />
        </Animated.View>
          <LottieAnimations
            source={require('../assets/animations/progress_bar.json')}
            progress={this.animateProgress}
            style={{ width:'100%', height:'20%' }}
          />
      </Animated.View>
    );
  }
}