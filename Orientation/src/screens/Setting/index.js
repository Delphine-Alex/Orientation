import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import styled from 'styled-components';

const App = () => {
    const [input, setInput] = useState('');
    const [qrvalue, setQrvalue] = useState('');

    return (
        <View>
            {qrvalue ? (
                <>
                    <QRCode
                        value={qrvalue}
                        size={250}
                        color="black"
                        backgroundColor="white"
                    />
                    <Text>Please insert any value to generate QR code</Text>

                    <TextInput
                        onChangeText={(input) => setInput(input)}
                        placeholder="Enter Any Value here"
                        value={input}
                    />
                    <TouchableOpacity onPress={() => setQrvalue(input)}>
                        <Text>Generate QR Code</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text>Please insert any value to generate QR code</Text>

                    <TextInput
                        onChangeText={(input) => setInput(input)}
                        placeholder="Enter Any Value here"
                        value={input}
                    />
                    <TouchableOpacity onPress={() => setQrvalue(input)}>
                        <Text>Generate QR Code</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default App;