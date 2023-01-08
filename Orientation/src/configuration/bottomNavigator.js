import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Setting from '../screens/Setting';

import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator
     barStyle={{ backgroundColor: '#E45826' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            icon = focused ? 'search' : 'search-outline';
          } else {
            icon = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={icon} size={20} color={color} />;
        },
      })}
    >
      <BottomStack.Screen name="Home" component={Home} />
      <BottomStack.Screen name="Search" component={Search} />
      <BottomStack.Screen name="Setting" component={Setting} />
    </BottomStack.Navigator >
  )
}


export default BottomNavigator