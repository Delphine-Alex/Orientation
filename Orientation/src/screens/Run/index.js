import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import MapView from 'react-native-maps';
import styled from "styled-components";
import ScanQRCode from "../../component/ScanQRCode";

// Récupérer la position de la balise en cours

const Run = ({navigation}) => {
  const [balise, setBalise] = useState();

  useEffect(() => {
    const getBalise = async () => {
      try {
        // a voir la bonne route
        const result = await axios.get('http://10.92.0.68:5179/api/balise')
        setBalise(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBalise()
  }, []);

  return (
    <View>
      <StyledMap
        initialRegion={{
          // A faire en fonction de l'objet balise
          latitude: balise.latitude,
          longitude: balise.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <ScanQRCode />
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