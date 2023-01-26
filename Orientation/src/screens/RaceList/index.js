import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Button, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const RaceList = () => {
  const [races, setRaces] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getRaces = async () => {
      try {
        const result = await axios.get('http://10.92.0.68:5170/api/Race')
        setRaces(result.data);
      } catch (error) {
        console.log(error)
      }
    }
    getRaces()
  }, []);

  return (
    <Container>

      <BackButton onPress={() => navigation.navigate('Home')}>Back</BackButton>

      <Title>Please select a race</Title>

      {races ? (
        <>
          {
            races.map((race) => {
              return (
                <ButtonSend key={race.id}>
                  <ButtonSendText>{race.name}</ButtonSendText>
                </ButtonSend>
              )
            })
          }
        </>
      ) : (
        <>
          <Text> Please create a race!</Text>
        </>
      )}

    </Container >
  )
}

const Container = styled.View`
    background-color: white;
    padding: 0 6% 2.5% 6%;
    height: 100%;
`
const BackButton = styled.Text`
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 14px;
    color: black;
`
const Title = styled.Text`
    margin-bottom: 40px;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    color: black;
`
const ButtonSend = styled.TouchableOpacity`
    border: 2px solid #7AB986;
    background-color: white;
    border-radius: 50px;
    margin-bottom: 25px;
    padding: 16px;
`
const ButtonSendText = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #7AB986;
`

export default RaceList;