// import React, { useState } from 'react';

// import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

// import styled from 'styled-components';

// const Race = () => {
//     const [name, setName] = useState({});
//     const [tests, setTests] = useState([]);
//     const navigation = useNavigation();

//     const submitName = async (text) => {
//         text.preventDefault();

//         // const url = 'http://localhost:7234';
//         // try {
//         //     await axios.post(url, user);
//         // } catch (error) {
//         //     console.log(error)
//         // }
//     }

//     const handleClick = () => {
//         setTest([...tests, ])
//     }

//     return (
//         <Container>
//             <Text onPress={() => navigation.navigate('Home')}>Back</Text>

//             <Text>Create a new race</Text>

//             <View>
//                 <TextInput
//                     placeholder='Enter a name'
//                     onChangeText={(text) => setName({ ...name, name: text })}
//                 />

//                 <TouchableOpacity>
//                     <Button title='Submit' type='submit' onPress={(e) => submitName(e)} />
//                 </TouchableOpacity>
//             </View>

//             <Button title='Add a QR Code' onPress={handleClick} />
//             {state ? (
//                 <Text>Test</Text>) :
//                 ("")}
//         </Container>
//     );
// }

// const Container = styled.View`
//     background-color: white;
//     padding: 0 6% 2.5% 6%;
//     height: 100%;
// `

// export default Race;

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const App = () => {
    const [input, setInput] = useState('');
    const [qrvalue, setQrvalue] = useState('');
    const [qrComponents, setQrComponents] = useState([]);

    function handleClick() {
        setQrComponents([...qrComponents,
        <>
            <Text>Please insert any value to generate QR code</Text>
            <TextInput
                onChangeText={(input) => setInput(input)}
                placeholder="Enter any value here"
                value={input}
            />
            <TouchableOpacity onPress={() => setQrvalue(input)}>
                <Text>Generate QR Code</Text>
            </TouchableOpacity>

            {qrvalue ? (
                <QRCode
                    key={qrComponents.length}
                    value={qrvalue}
                    size={250}
                    color="black"
                    backgroundColor="white"
                />
            ) : ('')
            }
        </>
        ])
    }

    return (
        <View>
            <TouchableOpacity onPress={handleClick}>
                <Text>Add QR Code</Text>
            </TouchableOpacity>

            {qrComponents.map((QrComponent, index) => (
                <View key={index}>{QrComponent}</View>
            ))}
        </View>
    );
};

export default App;


