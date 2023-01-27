import React, { useEffect, useState } from "react";
import axios from 'axios';

import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from "styled-components";

const PreRun = (race) => {
    const navigation = useNavigation();

    return (
        <Container>
            <BackButton onPress={() => navigation.navigate('Run')}>Back</BackButton>
            <Text>{race && race.route.params.name}</Text>

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

export default PreRun;
