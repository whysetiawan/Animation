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
	Easing,
	Dimensions
} from 'react-native';
import LottieAnimations from 'lottie-react-native';
import styles from '../components/style';
import { Button } from 'react-native-elements';

const width = Dimensions.get('window').width;

export default class Greetings2 extends Component {

  constructor(props){
    super(props);
		console.log(props)
    this.state = {
			finished: false,
			count: ''
    }

		this.animateText = new Animated.Value(-500);
		this.animateText2 = new Animated.Value(-500);
		this.animateButton = new Animated.Value(0);
    this.animateEmoticon = new Animated.Value(0);
    this.animateBackground = new Animated.Value(0);
		this.animateProgress = new Animated.Value(0);
		this.animateLaunch = new Animated.Value(0);
  }

  componentDidMount(){
		this.easingIn();
		
	}

	componentDidUpdate(prevProps, prevState){
		if(this.state.count == 0){
			clearInterval(this.interval)
			this.setState({ count: 'Launching...'})
			Animated.timing(this.animateLaunch, {
				duration: 3000,
				toValue: 1
			}).start(() => {
				this.props.isLaunched();
			})
		}
	}

  easingIn(){
    Animated.sequence([
      Animated.timing(this.animateText, {
        duration: 1000,
        easing: Easing.in(Easing.bounce),
        toValue: 0
      }),
      Animated.parallel([
        Animated.timing(this.animateEmoticon, {
          duration: 3000,
          toValue: 1,
          delay: 500
        }),
      ]),
      Animated.timing(this.animateBackground, {
        toValue: 400,
        duration: 2000,
      }),
			Animated.timing(this.animateText2, {
				duration: 1000,
				toValue: 0
			}),
			Animated.timing(this.animateButton, {
				toValue: width,
				duration: 500,
				delay: 500
			}),

    ]).start(() => {
			this.setState({ count: 10 }, () => {
				if(!isNaN(this.state.count)){
					this.interval = setInterval(() => {
						this.setState((prevState) => {
							return {
								count: prevState.count - 1
							}
						})
					}, 1000)
				}
			})
		});
  }

  render() {
    const backgroundColor = this.animateBackground.interpolate({
      inputRange: [0, 400],
      outputRange: ['#ffffff', '#222']
    })    
    const color = this.animateBackground.interpolate({
      inputRange: [0, 1],
      outputRange: ['#2f3640', '#ffffff']
		})
		const launch = this.animateLaunch.interpolate({
			inputRange: [0 , 1],
			outputRange: ['transparent', '#FFFFFF']
		})
    return (
      <Animated.View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Animated.Text style={[styles.welcome, { color: color, transform: [{ translateX: this.animateText }] }]}>
          Did You Know?
        </Animated.Text>
        <LottieAnimations
          source={require('../assets/animations/react.json')}
          progress={this.animateEmoticon}
          style={{ width:'100%', height:'20%' }} />
        <Animated.Text style={[styles.instructions, { color: color, opacity: this.animateEmoticon }]}>
          This App was built with React Native
        </Animated.Text>
				<Animated.Text style={[styles.instructions, { color: color, transform: [{ translateX: this.animateText2 }] }]}>
					Want to know more?
        </Animated.Text>
				<Animated.Text style={[styles.instructions, { color: color, transform: [{ translateX: this.animateText2 }] }]}>
					{this.state.count}
        </Animated.Text>
        <Animated.View style={{ width: this.animateButton, height:'100%', position:'absolute', backgroundColor: launch }} >
          <LottieAnimations
						source={require('../assets/animations/bms-rocket.json')}
						progress={this.animateLaunch}
            style={{ width:'100%', height:'100%' }}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}