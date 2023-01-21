import React from "react";
import { Button, View } from "react-native";
import MapView from 'react-native-maps';
import styled from "styled-components";
import ScanQRCode from "../../component/ScanQRCode";



const Run = ({navigation}) => {
  return (
    <View>
      <StyledMap />
      <ScanQRCode />
      <Button onPress={() => navigation.navigate('Home')} title="Home" /> 
      <Button onPress={() => navigation.navigate('test')} title="Test" /> 
    </View>
  );
}

const StyledMap = styled(MapView) `
  align-self: center;
  height: 250px;
  width: 250px;
`;

export default Run;