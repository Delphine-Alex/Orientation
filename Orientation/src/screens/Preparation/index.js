import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Text, View, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Preparation = () => {
  const navigation = useNavigation();

  const [races, setRaces] = useState([]);

  useEffect(() => {
    const getRaces = async () => {
      try {
        const result = await axios.get('https://archilogllele.azurewebsites.net/api/Race')
        setRaces(result.data);
      } catch (error) {
        console.log(error)
      }
    }
    getRaces()
  }, []);

  return (
    <Container>
      <ScrollView>

        <BackButton onPress={() => navigation.navigate('Home')}>Back</BackButton>

        <Title>Please select a race</Title>

        {
          races ? (
            <>
              {
                races.map((race) => {
                  return (
                    <ButtonSend onPress={() => navigation.navigate('PreRun', { id: race.id })}>
                      <View key={race.id}>
                        <ButtonSendText>{race.name}</ButtonSendText>
                      </View>
                    </ButtonSend>
                  )
                })
              }
            </>
          ) : (
            <>
              <Text> Please create a race!</Text>
            </>
          )
        }
      </ScrollView>
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

export default Preparation;