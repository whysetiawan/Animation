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

  constructor(){
    super();

    this.state = {
      language: true,
      program: true
    }
    this.ltr = new Animated.Value(500);
  }

  componentDidMount(){
    Animated.sequence([
      Animated.timing(this.ltr, {
        toValue: 0,
        duration: 750,
        easing: Easing.in(Easing.linear)
      }),
      // Animated.timing(this.rtl, {
      //   toValue: 0,
      //   duration: 750,
      //   easing: Easing.linear
      // })
    ]).start()
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ minHeight: '100%' }} >
        <View style={[styles.normalContainer, { backgroundColor: '#f5f6fa' }]}>
          <TouchableNativeFeedback onPress={() => this.setState({ language: !this.state.language })} >
            <Animated.View >
              <Card containerStyle={{ margin:0 }} >
                <View style={styles.spacebetweenContainer}>
                  <Text style={[styles.instructions, { fontFamily: 'default' }]}>Language</Text>
                  <Icon name="ios-arrow-down" size={30} />
                </View>
                <Collapsible collapsed={this.state.language} duration={750} >
                  <View style={[styles.spacebetweenContainer, { paddingTop: 15 }]}>
                    <Text style={styles.normalFont}>English</Text>
                    <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end',  }}>
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#a5b1c2' />
                    </View>
                  </View>
                  <View style={styles.spacebetweenContainer}>
                    <Text style={styles.normalFont}>Indonesia</Text>
                    <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', marginVertical: '1%' }}>
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    </View>
                  </View>
                </Collapsible>
              </Card>
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.setState({ program: !this.state.program })} >
            <Animated.View >
              <Card containerStyle={{ margin:0 }} >
                <View style={styles.spacebetweenContainer}>
                  <Text style={[styles.instructions, { fontFamily: 'default' }]}>Programming Skills</Text>
                  <Icon name="ios-arrow-down" size={30} />
                </View>
                <Collapsible collapsed={this.state.program} duration={750} >
                  <View style={[styles.spacebetweenContainer, { paddingTop: 15 }]}>
                    <Text style={styles.normalFont}>React JS</Text>
                    <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end',  }}>
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#a5b1c2' />
                    </View>
                  </View>
                  <View style={styles.spacebetweenContainer}>
                    <Text style={styles.normalFont}>React Native</Text>
                    <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', marginVertical: '1%' }}>
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    </View>
                  </View>
                  <View style={styles.spacebetweenContainer}>
                    <Text style={styles.normalFont}>Redux</Text>
                    <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', marginVertical: '1%' }}>
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#a5b1c2' />
                    </View>
                  </View>
                  <View style={styles.spacebetweenContainer}>
                    <Text style={styles.normalFont}>Node JS</Text>
                    <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', marginVertical: '1%' }}>
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#a5b1c2' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#a5b1c2' />
                      <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#a5b1c2' />
                    </View>
                  </View>
                </Collapsible>
              </Card>
            </Animated.View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    );
  }
}