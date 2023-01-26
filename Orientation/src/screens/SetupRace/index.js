import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Geolocation from "@react-native-community/geolocation"
import ScanQRCode from "../../component/ScanQRCode";

const SetupRace = ({navigation}) => {
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        setCurrentLongitude(
          JSON.stringify(position.coords.longitude)
        )
    
        //getting the Latitude from the location json
        setCurrentLatitude(
          JSON.stringify(position.coords.latitude)
        )
          
      }, (error) => alert(error.message), { 
        enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
      }
    );
  }

  // enregistrer la location au moment du scan de la balise
  const pushLocation = async () => {
    try {
      // A voir la route a utiliser 
      await axios.post('http://10.92.0.68:5170/api/?', {
        currentLatitude,
        currentLongitude
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Button onPress={() => getLocation()} title="GetLocation" />
      <Text>Latitude : { currentLatitude }</Text>
      <Text>Longitude : { currentLongitude }</Text>
      <ScanQRCode />
      <Button onPress={() => pushLocation()} title="submit" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  )
}

export default SetupRace;