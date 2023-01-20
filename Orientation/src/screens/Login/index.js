import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';


const Login = () => {
    const navigation = useNavigation();

    return (
        <Container>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Login</Text>
            </TouchableOpacity>

            <View>
                <Subtitle>Username or Email Adress</Subtitle>
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
                />

                <ButtonContainer>
                    <ButtonText>Sign in</ButtonText>
                </ButtonContainer>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Authentication')}>
                <SignIn>Not a member? <SignInColor>Sign up now</SignInColor></SignIn>
            </TouchableOpacity>

        </Container >
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
const SignIn = styled.Text`
    text-align: center;
    margin-top: 18px;
    color: black;
`
const SignInColor = styled.Text`
    color: green;
`

export default Login;