import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../screens/Authentication';
// import BottomNavigator from './bottomNavigator';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Race from '../screens/Race';
import Setting from '../screens/Setting';
import RaceList from '../screens/RaceList';
import Run from '../screens/Run';

const Routes = (props) => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Authentication" component={Authentication} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Race" component={Race} />
        <RootStack.Screen name="Setting" component={Setting} />
        <RootStack.Screen name="RaceList" component={RaceList} />
        <RootStack.Screen name="Run" component={Run} />
        {/* <RootStack.Screen name="BottomNavigator" component={BottomNavigator} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;