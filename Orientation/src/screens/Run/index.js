import React
  // , { useEffect, useState } 
  from "react";

import { Button, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import RaceList from "../../component/RaceList";

import styled from "styled-components";


const Run = () => {
  const navigation = useNavigation();

  return (
    < Container >

      <BackButton onPress={() => navigation.navigate('Home')}>Back</BackButton>

      <Title>Please select a race</Title>

      <ButtonSend onPress={() => navigation.navigate('StartRace')}>
        <RaceList />
      </ButtonSend>

    </Container >
  );
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

export default Run;