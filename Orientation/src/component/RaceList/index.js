import React, { useEffect, useState } from "react";
import axios from 'axios';

import { View } from "react-native";

import styled from "styled-components";

const RaceList = () => {
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
        <View>
            {
                races ? (
                    <>
                        {
                            races.map((race) => {
                                return (
                                    <View key={race.id}>
                                        <ButtonSendText>{race.name}</ButtonSendText>
                                    </View>
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

        </View>
    );
}

const ButtonSendText = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #7AB986;
`

export default RaceList;
