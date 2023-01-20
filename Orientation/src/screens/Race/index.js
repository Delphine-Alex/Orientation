import React, { useState } from 'react';

import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Race = () => {
    const [name, setName] = useState({});
    // const navigation = useNavigation();

    const submitName = async (text) => {
        text.preventDefault();
        console.log(name)

        // const url = 'http://localhost:7234';
        // try {
        //     await axios.post(url, user);
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <Container>
            <Text>Create a new race</Text>

            <View>
                <TextInput
                    placeholder='Enter a name'
                    onChangeText={(text) => setName({ ...name, name: text })}
                />

                <TouchableOpacity>
                    <Button title='Submit' type='submit' onPress={(e) => submitName(e)} />
                </TouchableOpacity>
            </View>
        </Container>
    );
}

const Container = styled.View`
    background-color: white;
    padding: 0 6% 2.5% 6%;
    height: 100%;
`

export default Race;
