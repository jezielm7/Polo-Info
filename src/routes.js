import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import Profile from './pages/Profile';
import MoreInfo from './pages/MoreInfo';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            borderTopWidth: 0,
            backgroundColor: '#000010',
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            marginTop: 6,
            fontSize: 13,
          },
          activeTintColor: '#bf94ff',
          inactiveTintColor: '#efeff1',
        }}
      >
        <Screen name="Home" component={Home} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="home-outline"
                size={size}
                color={focused ? '#bf94ff' : '#efeff1'}
              />
            )
          }
        }} />

        <Screen name="More" component={MoreInfo} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="add-circle-outline"
                size={28}
                color={focused ? '#bf94ff' : '#efeff1'}
              />
            )
          }
        }} />

        <Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="md-person-outline"
                size={size}
                color={focused ? '#bf94ff' : '#efeff1'}
              />
            )
          }
        }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;