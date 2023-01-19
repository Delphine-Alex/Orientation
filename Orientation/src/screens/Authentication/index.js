import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Authentication = () => {
    const navigation = useNavigation();

    return (
        <Container>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Back</Text>
            </TouchableOpacity>

            <View>
                <Subtitle>Email Adress</Subtitle>
                <Input
                    label='Email'
                    name='email'
                    id='email'
                    type='email'
                    rsecureTextEntry={false}
                />

                <Subtitle>Username</Subtitle>
                <Input
                    label='Username'
                    name='username'
                    id='username'
                    type='username'
                    rsecureTextEntry={false}
                />

                <Subtitle>Password</Subtitle>
                <Input
                    label='Password'
                    name='password'
                    id='password'
                    type='password'
                    secureTextEntry={true}
                    placeholder='6+ characters'
                />

                <TextWarning>Creating an account means you're ok with our Terms of Service,
                    Privacy Policy, and our default Notification Settings.
                </TextWarning>

                <ButtonContainer>
                    <ButtonText>Create Account</ButtonText>
                </ButtonContainer>
            </View>
        </Container>
    );
}

const Container = styled.View`
  background-color: white;
  padding: 0 6% 2.5% 6%;
  height: 100%;
`
const Subtitle = styled.TextInput`
    font-size: 16px;
    font-weight: 600;
    color: black;
`
const Input = styled.TextInput`
    background-color: lightgray;
    border-radius: 4px;
    margin: 4% 0 8% 0;
    padding-left: 6%;
    height: 50px;
`
const TextWarning = styled.Text`
    text-align: justify;
    font-size: 14px;
    padding: 4%;
    /* color: white; */
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

export default Authentication;
