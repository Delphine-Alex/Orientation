import React from 'react';

import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Home = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonContainer onPress={() => navigation.navigate('Race')}>
                <Text>Create a race</Text>
            </ButtonContainer>

            <ButtonContainer>
                <Text>Baliser la course</Text>
            </ButtonContainer>

            <ButtonContainer onPress={() => navigation.navigate('RaceList')}>
                <Text>Courir</Text>
            </ButtonContainer>

            <ButtonContainer onPress={() => navigation.navigate('Setting')}>
                <Text>QR Code</Text>
            </ButtonContainer>

        </Container>
    );
}

const Container = styled.View`
    background-color: white;
    padding: 0 6% 2.5% 6%;
    height: 100%;
`
const ButtonContainer = styled.TouchableOpacity`
    background-color: green;
    border-radius: 4px;
    margin-top: 10px;
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