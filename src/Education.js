/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import LottieAnimations from 'lottie-react-native';
import styles, { screenHeight } from '../components/style';
import { Button, Divider, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Main extends PureComponent {

  constructor(props){
    super(props);

    this.state={
      es: true,
      jhs: true,
      shs: true
    }

    this.animatedView1 = new Animated.Value(-1000);
    this.animatedView2 = new Animated.Value(1000);
  }

  componentDidMount(){
    Animated.parallel([
      Animated.timing(this.animatedView1,{
        toValue:0,
        duration:1000
      }),
      Animated.timing(this.animatedView2, {
        toValue:0,
        duration:1000
      })
    ]).start()
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ minHeight: '100%' }} >
        <View style={[styles.normalContainer, { backgroundColor: '#f5f6fa' }]}>
          <TouchableNativeFeedback onPress={() => this.setState({ es: !this.state.es })} >
            <Animated.View style={{ transform: [{ translateX: this.animatedView1 }] }} >
              <Card containerStyle={{ margin:0 }} >
                <View style={styles.spacebetweenContainer}>
                  <Text style={styles.normalFont}>Elementary School Marga Jaya</Text>
                  <Icon name="ios-arrow-down" size={30} />
                </View>
                <Collapsible collapsed={this.state.es} duration={750} >
                  <Text style={styles.normalFont}>2005 - 2011</Text>
                </Collapsible>
              </Card>
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.setState({ jhs: !this.state.jhs })} >
            <Animated.View style={{ transform: [{ translateX: this.animatedView2 }] }} >
              <Card containerStyle={{ margin:0 }} >
                <View style={styles.spacebetweenContainer}>
                  <Text style={styles.normalFont}>Junior High School 1 Padalarang</Text>
                  <Icon name="ios-arrow-down" size={30} />
                </View>
                <Collapsible collapsed={this.state.jhs} duration={750} >
                  <Text style={styles.normalFont}>2011 - 2014</Text>
                </Collapsible>
              </Card>
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.setState({ shs: !this.state.shs })} >
            <Animated.View style={{ transform: [{ translateX: this.animatedView1 }] }} >
              <Card containerStyle={{ margin:0 }} >
                <View style={styles.spacebetweenContainer}>
                  <Text style={styles.normalFont}>Vocational High School 4 Padalarang{'\n'}(Computer and Network Engineering)</Text>
                  <Icon name="ios-arrow-down" size={30} />
                </View>
                <Collapsible collapsed={this.state.shs} duration={750} >
                  <Text style={styles.normalFont}>2014 - 2017</Text>
                </Collapsible>
              </Card>
            </Animated.View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    );
  }
}