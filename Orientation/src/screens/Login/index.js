import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';


const Login = () => {
    const navigation = useNavigation();

    return (
        <Container>

            <Title>Welcome to this new orienteering application. Before you start, please create an account or log in!</Title>

            <SecondTitle>Log in</SecondTitle>

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

                <ButtonContainer onPress={() => navigation.navigate('Home')}>
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
const Title = styled.Text`
    padding: 6% 0% 10% 0%;
    text-align: justify;
    font-weight: bold;
    font-size: 18px;
    color: black;
`
const SecondTitle = styled.Text`
    padding: 4% 0% 6% 0%;
    text-align: justify;
    font-weight: 600;
    font-size: 17px;
    color: #7AB986;
`
const Subtitle = styled.TextInput`
    font-size: 16px;
    font-weight: 600;
    color: black;
`
const Input = styled.TextInput`
    background-color: lightgray;
    border-radius: 50px;
    margin: 4% 0 6% 0;
    padding-left: 6%;
    height: 50px;
`
const ButtonContainer = styled.TouchableOpacity`
    background-color: #7AB986;
    border-radius: 50px;
    margin-top: 20px;
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
    color: #7AB986;
`

export default Login;