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
  TouchableNativeFeedback,
  Linking
} from 'react-native';
import LottieAnimations from 'lottie-react-native';
import styles, { screenHeight } from '../components/style';
import { Button, Divider, Avatar, Card, SocialIcon } from 'react-native-elements';
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
      bio: true,
      education: true,
      skills: true
    }
    this.ltr = new Animated.Value(500);
  }

  componentDidMount() {
    Linking.getInitialURL().then((url) => console.log(url)).catch((err) => console.log(url))
    Linking.addEventListener('url', this.openURL);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.openURL);
  }

  openURL(url){
    Linking.openURL(url).catch((err) => alert('An error occured'))
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ minHeight: '100%' }} >
        <View style={[styles.normalContainer, { backgroundColor: '#f5f6fa' }]}>
          <Avatar
            containerStyle={{ alignSelf: 'center', marginVertical: '3%', }}
            source={require('../components/avatar.jpg')}
            rounded
            xlarge
          />
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Name</Text>
              <Text style={styles.normalFont}>Wahyu Setiawan</Text>
            </View>
          </Card>
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Birth Place, Date</Text>
              <Text style={styles.normalFont}>Bandung, May 17th 1999</Text>
            </View>
          </Card>
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Gender</Text>
              <Text style={styles.normalFont}>Male</Text>
            </View>
          </Card>
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Marital Status</Text>
              <Text style={styles.normalFont}>Single</Text>
            </View>
          </Card>
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Address</Text>
              <Button
                buttonStyle={{ padding: 10, borderRadius: 5 }}
                onPress={() => this.props.navigation.navigate('Maps') }
                backgroundColor='#45aaf2'
                title='Maps'
                iconRight={{ name:'md-map', type: 'ionicon' }}
              />
            </View>
          </Card>
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Phone Number</Text>
              <Text style={styles.normalFont}>+6289527617422</Text>
            </View>
          </Card>
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Email</Text>
              <Text style={styles.normalFont}>whysetiawan27@gmail.com</Text>
            </View>
          </Card>
          
          <Card containerStyle={{ margin:0 }} >
            <View style={styles.spacebetweenContainer}>
              <SocialIcon
                type='linkedin'
                onPress={() => this.openURL('https://www.linkedin.com/in/whysetiawan') }
              />
              <SocialIcon
                light
                type='instagram'
                onPress={() => this.openURL('instagram://user?username=whysetiawan17' || 'https://www.instagram.com/whysetiawan17') }
              />
              <SocialIcon
                type='github'
                onPress={() => this.openURL('https://www.github.com/whysetiawan') }
              />
              <SocialIcon
                type='google-plus-official'
                onPress={() => this.openURL('mailto:whysetiawan27@gmail.com') }
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}