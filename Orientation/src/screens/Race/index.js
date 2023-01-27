import React, { useState } from 'react';
import axios from 'axios';

import { ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

import styled from 'styled-components';

const Race = () => {

    const [name, setName] = useState({});
    const [input, setInput] = useState('');
    const [qrvalue, setQrvalue] = useState('');

    const [qrComponents, setQrComponents] = useState([]);

    const navigation = useNavigation();

    const handleClick = () => {
        setQrComponents([...qrComponents, input]);
        setQrvalue('');
    }

    const submitName = async (text) => {
        text.preventDefault();

        const url = 'https://archilogllele.azurewebsites.net/api/Race';
        try {
            await axios.post(url, name);
        } catch (error) {
            console.log('error', error)
        }
    }

    const sumbitTag = async () => {
        const url = 'https://archilogllele.azurewebsites.net/api/Tag';
        try {
            await axios.post(url, qrComponents);
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <Container>
            <ScrollView>

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


                <TextCode>Please insert any value to generate QR code</TextCode>

                <Input
                    onChangeText={(input) => setInput(input)}
                    placeholder="Enter Any Value here"
                    value={input}
                />

                <ButtonSend onPress={handleClick}>
                    <ButtonSendText>Add more QR Code</ButtonSendText>
                </ButtonSend>

                {qrComponents.map((QrComponent) => (
                    <View>
                        <QRCodeText>{QrComponent}</QRCodeText>
                        <Box>
                            {qrvalue ? (
                                <QRCode
                                    value={QrComponent}
                                    size={250}
                                    color="black"
                                    backgroundColor="white"
                                />
                            ) : ('')}
                        </Box>
                    </View>
                ))}

                <GenerateButton onPress={() => setQrvalue(input)}>
                    <ButtonText>Generate QR Code</ButtonText>
                </GenerateButton>

                <ButtonSend onPress={() => sumbitTag()}>
                    <ButtonSendText>Validate</ButtonSendText>
                </ButtonSend>

            </ScrollView>
        </Container >
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
    margin-bottom: 25px;
`
const ButtonText = styled.Text`
    padding: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: white;
`
const QRCodeText = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: black;
`

export default Race;



