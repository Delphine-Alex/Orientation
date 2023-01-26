import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Text } from "react-native";

import { useNavigation } from '@react-navigation/native';

import styled from "styled-components";

const StartRace = ({ route }) => {
    const [race, setRace] = useState({});

    const navigation = useNavigation();

    useEffect(() => {
        const getRace = async () => {
            try {
                const result = await axios.get(`https://archilogllele.azurewebsites.net/api/Race/${route.params.id}`)
                setRace(result.data);
            } catch (error) {
                console.log(error)
            }
        }
        getRace()
    }, []);

    return (
        <Container>
            <BackButton onPress={() => navigation.navigate('Run')}>Back</BackButton>
            <Text>{race.name}</Text>
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
