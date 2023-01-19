import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../screens/Authentication';
import BottomNavigator from './bottomNavigator';
import Login from '../screens/Login';

const Routes = (props) => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Authentication" component={Authentication} />
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;