import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Preparation from '../screens/Preparation';
import Race from '../screens/Race';
import Run from '../screens/Run';
import Setting from '../screens/Setting';
import StartRace from '../screens/StartRace';
// import SetupRace from '../screens/SetupRace';

const Routes = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Authentication" component={Authentication} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Preparation" component={Preparation} />
        <RootStack.Screen name="Race" component={Race} />
        <RootStack.Screen name="Run" component={Run} />
        <RootStack.Screen name="Setting" component={Setting} />
        <RootStack.Screen name="StartRace" component={StartRace} />
        {/* <RootStack.Screen name="SetupRace" component={SetupRace} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;