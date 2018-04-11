import { TabNavigator } from 'react-navigation';
import React from 'react';
import Main from '../../src/Main';
import Bio from '../../src/Bio';
import Education from '../../src/Education';
import Skills from '../../src/Skills';
import Icon from 'react-native-vector-icons/Ionicons';

export default tabNav = TabNavigator({
    Bio: {
			screen: Bio,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="md-person" color={tintColor} size={26} />
			}
		},
		Education: {
			screen: Education,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="md-book" color={tintColor} size={26} />
			}
		},
		Skills: {
			screen: Skills,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="md-bulb" color={tintColor} size={26} />
			}
		}
}, {
    tabBarOptions: {
			activeTintColor: '#ffffff',
			inactiveTintColor: '#d1d8e0',
			showIcon: true,
			showLabel: true,
			style: {
				backgroundColor:'#45aaf2'
			},
			indicatorStyle: {
				backgroundColor:'white'
			}
		},
		lazy: true,
		
})