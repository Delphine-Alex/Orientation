import React, { useState } from 'react';
import axios from 'axios';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

import Share from 'react-native-share';

import styled from 'styled-components';

const Race = () => {

    const [name, setName] = useState({});
    const [input, setInput] = useState('');
    const [qrvalue, setQrvalue] = useState('');

    const navigation = useNavigation();

    const submitName = async (text) => {
        text.preventDefault();

        const url = 'http://10.92.0.68:5170/api/Race';
        try {
            await axios.post(url, name);
        } catch (error) {
            console.log('error', error)
        }
    }

    const openShareScreen = () => {
        Share.open(qrvalue)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }

    return (
        <Container>

            <BackButton onPress={() => navigation.navigate('Home')}>Back</BackButton>

            <Title>Create a new race</Title>

            <View>
                <SubTitle>First step: entrer a name for the race</SubTitle>
                <Input
                    label='Name'
                    name='name'
                    id='name'
                    type='text'
                    rsecureTextEntry={false}
                    placeholder='Enter a name'
                    onChangeText={(text) => setName({ ...name, name: text })}
                />
                <ButtonSend>
                    <ButtonSendText onPress={(e) => submitName(e)}>Send</ButtonSendText>
                </ButtonSend>
            </View>

            <SubTitle>Second step: add QR Code</SubTitle>

            {qrvalue ? (
                <>
                    <TextCode>Please insert any value to generate QR code</TextCode>

                    <Box>
                        <QRCode
                            value={qrvalue}
                            size={200}
                            color="black"
                            backgroundColor="white"
                        />
                    </Box>

                    <Input
                        onChangeText={(input) => setInput(input)}
                        placeholder="Enter Any Value here"
                        value={input}
                    />
                    <GenerateButton onPress={() => setQrvalue(input)}>
                        <ButtonText>Generate QR Code</ButtonText>
                    </GenerateButton>
                </>
            ) : (
                <>
                    <TextCode>Please insert any value to generate QR code</TextCode>

                    <Input
                        onChangeText={(input) => setInput(input)}
                        placeholder="Enter Any Value here"
                        value={input}
                    />
                    <GenerateButton onPress={() => setQrvalue(input)}>
                        <ButtonText>Generate QR Code</ButtonText>
                    </GenerateButton>

                </>
            )}

            <ButtonSend>
                <ButtonSendText onPress={openShareScreen}>Send QR Codes by mail</ButtonSendText>
            </ButtonSend>

        </Container>
    );
};

const Container = styled.View`
    background-color: white;
    padding: 0 6% 2.5% 6%;
    height: 100%;
`
const Box = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6% 0% 6% 0%;
`
const BackButton = styled.Text`
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 14px;
    color: black;
`
const ButtonSend = styled.TouchableOpacity`
    border: 2px solid #7AB986;
    background-color: white;
    border-radius: 50px;
    margin-bottom: 25px;
    padding: 14px;
`
const ButtonSendText = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #7AB986;
`
const Title = styled.Text`
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
    color: #7AB986;
`
const SubTitle = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
`
const Input = styled.TextInput`
    background-color: lightgray;
    border-radius: 50px;
    margin: 4% 0 6% 0;
    padding-left: 6%;
    height: 50px;
`
const TextCode = styled.Text`
    margin-top: 10px;
`
const GenerateButton = styled.TouchableOpacity`
    background-color: #7AB986;
    border-radius: 50px;
`
const ButtonText = styled.Text`
    padding: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: white;
`

export default Race;



