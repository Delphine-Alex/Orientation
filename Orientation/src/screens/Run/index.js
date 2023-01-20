import React from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import styled from "styled-components";

const Run = ({navigation}) => {
  return (
    <View>
      <StyledMap />
      <Button onPress={() => navigation.navigate('Home')} title="Home" /> 
    </View>
  );


}

const StyledMap = styled(MapView) `
  align-self: center;
  height: 250px;
  width: 250px;
`;

export default Run;