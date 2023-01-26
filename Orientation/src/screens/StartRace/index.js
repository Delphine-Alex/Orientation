import React from 'react';

import { Button, View, Text } from "react-native";

import styled from "styled-components";

const StartRace = () => {
    return (
        <Container>
            <BackButton onPress={() => navigation.navigate('Home')}>Back</BackButton>

            <Text>Text</Text>
        </Container>
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

export default StartRace;
