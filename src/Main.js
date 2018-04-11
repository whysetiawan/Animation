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
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';

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
          <TouchableNativeFeedback onPress={() => this.setState({ bio: !this.state.bio })} >
            <Animated.View style={[styles.collapsibleContainer, { transform: [{ translateX: this.ltr }] }]}>
              <Text style={[styles.instructions, { fontFamily: 'default' }]}>Bio</Text>            
              <Icon name="ios-arrow-down" size={30} />
            </Animated.View>
          </TouchableNativeFeedback>
          <Collapsible collapsed={this.state.bio}>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Name</Text>
              <Text style={styles.normalFont}>Wahyu Setiawan</Text>
            </View>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Birth Place, Date</Text>
              <Text style={styles.normalFont}>Bandung, May 17th 1999</Text>
            </View>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Gender</Text>
              <Text style={styles.normalFont}>Male</Text>
            </View>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Marital Status</Text>
              <Text style={styles.normalFont}>Single</Text>
            </View>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Address</Text>
              <View style={{ width:'50%' }}>
                <Text style={[styles.normalFont, { textAlign:'right' }]}>Kp. Hegarmanah RT 08 RW 20 Des. Cilame Kec. Ngamprah Kab. Bandung Barat Prov. Jawa Barat</Text>
              </View>
            </View>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Phone Number</Text>
              <Text style={styles.normalFont}>+6289527617422</Text>
            </View>
            <View style={styles.spacebetweenContainer}>
              <Text style={styles.normalFont}>Email</Text>
              <Text style={styles.normalFont}>whysetiawan27@gmail.com</Text>
            </View>
          </Collapsible>
            <Divider style={{ height: 1, marginTop:'1%', backgroundColor: '#222' }}  />
          
          <TouchableNativeFeedback onPress={() => this.setState({ education: !this.state.education })} >
            <View style={styles.collapsibleContainer}>
              <Text style={[styles.instructions, { fontFamily: 'default' }]}>Education</Text>
              <Icon name="ios-arrow-down" size={30} />
            </View>
          </TouchableNativeFeedback>
            <Collapsible collapsed={this.state.education}>
              <View style={styles.spacebetweenContainer}>
                <Text style={styles.normalFont}>SDN Marga Jaya</Text>
                <Text style={styles.normalFont}>2005 - 2011</Text>
              </View>
              <View style={styles.spacebetweenContainer}>
                <Text style={styles.normalFont}>SMPN 1 Padalarang</Text>
                <Text style={styles.normalFont}>2011 - 2014</Text>
              </View>
              <View style={styles.spacebetweenContainer}>
                <View style={{ width:'70%' }}>
                  <Text style={styles.normalFont}>SMKN 4 Padalarang{'\n'}(Teknik Komputer dan Jaringan)</Text>
                </View>
                <Text style={styles.normalFont}>2014 - 2017</Text>
              </View>
            </Collapsible>
            <Divider style={{ height: 1, marginTop:'1%', backgroundColor: '#222' }}  />
            
            <TouchableNativeFeedback onPress={() => this.setState({ skills: !this.state.skills })} >
            <View style={styles.collapsibleContainer}>
              <Text style={[styles.instructions, { fontFamily: 'default' }]}>Skills</Text>
              <Icon name="ios-arrow-down" size={30} />
            </View>
          </TouchableNativeFeedback>
            <Collapsible collapsed={this.state.skills}>
              <View style={styles.spacebetweenContainer}>
                <Text style={styles.normalFont}>React JS</Text>
                  <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', }}>
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                  </View>
              </View>
              <View style={styles.spacebetweenContainer}>
                <Text style={styles.normalFont}>React Native</Text>
                  <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', }}>
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                  </View>
              </View>
              <View style={styles.spacebetweenContainer}>
                <Text style={styles.normalFont}>Redux</Text>
                  <View style={{ flexDirection:'row', width:'50%', justifyContent: 'flex-end', }}>
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                    <Icon name="md-star" size={18} style={{ textAlign: 'right' }} color='#fed330' />
                  </View>
              </View>
            </Collapsible>
            <Divider style={{ height: 1, marginTop:'1%', backgroundColor: '#222' }}  />
        </View>
      </ScrollView>
    );
  }
}