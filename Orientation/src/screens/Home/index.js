import React from 'react';

import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Home = () => {
    const navigation = useNavigation();

    return (
        <Container>

            <Title>Please follow the following steps in order. If the race is already created, you can skip the first step.</Title>


            <SubTitle>First step</SubTitle>
            <ButtonContainer onPress={() => navigation.navigate('Race')}>
                <ButtonText>Create a race</ButtonText>
            </ButtonContainer>

            <SubTitle>Second step</SubTitle>
            <ButtonContainer onPress={() => navigation.navigate('RaceList')}>
                <ButtonText>Race preparation</ButtonText>
            </ButtonContainer>

            <SubTitle>Third step</SubTitle>
            <ButtonContainer onPress={() => navigation.navigate('RaceList')}>
                <ButtonText>Run the race</ButtonText>
            </ButtonContainer>

            {/* <ButtonContainer onPress={() => navigation.navigate('Setting')}>
                <Text>QR Code</Text>
            </ButtonContainer> */}

        </Container>
    );
}

const Container = styled.View`
    background-color: white;
    padding: 0 6% 2.5% 6%;
    height: 100%;
`
const Title = styled.Text`
    padding: 25% 0% 25% 0%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`
const SubTitle = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 14px;
`
const ButtonContainer = styled.TouchableOpacity`
    background-color: #7AB986;
    border-radius: 50px;
    margin-bottom: 40px;
    margin-top: 6px;
    padding: 16px;
    height: 50px;
`
const ButtonText = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: white;
`

export default Home;