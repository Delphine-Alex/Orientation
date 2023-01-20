import React from "react";
import { Button, View } from "react-native";

const RaceList = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Run')} title="Course" /> 
      <Button onPress={() => navigation.navigate('Home')} title="Home" /> 
    </View>
  )
}

export default RaceList;