// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// import { View, Text } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

// import styled from "styled-components";

// const PreRun = (route) => {
//     const [race, setRace] = useState({});
//     // const [allTag, setAllTag] = useState({});
//     // const [selectedTag, setSelectedTag] = useState({});

//     const navigation = useNavigation();

//     useEffect(() => {
//         const getRace = async () => {
//             try {
//                 const result = await axios.get(`https://archilogllele.azurewebsites.net/api/Race/${route.params.id}`)
//                 setRace(result.data);
//                 console.log(result.data);
//                 // getTag();
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         // const getTag = async () => {
//         //     try {
//         //         const result2 = await axios.get(`https://archilogllele.azurewebsites.net/api/Tag`)
//         //         setAllTag(result2.data)
//         //         console.log(result2.data)
//         //         const temp = []
//         //         for (let index = 0; index < allTag.length; index++) {
//         //             if (allTag[index].idRace === race.id) {
//         //                 temp.push(allTag[index])
//         //             }
//         //         }
//         //         setSelectedTag(temp)
//         //         console.log('selectTags', selectedTag)
//         //     } catch (error) {
//         //         console.log(error)
//         //     }
//         // }
//         getRace()
//     }, []);

//     return (
//         <Container>
//             <BackButton onPress={() => navigation.navigate('Preparation')}>Back</BackButton>
//             <Text>{race.name}</Text>
//         </Container>
//     );
// }

// const Container = styled.View`
//     background-color: white;
//     padding: 0 6% 2.5% 6%;
//     height: 100%;
// `
// const BackButton = styled.Text`
//     margin-bottom: 25px;
//     font-weight: bold;
//     font-size: 14px;
//     color: black;
// `

// export default PreRun;

import React, { useEffect, useState } from "react";
import axios from 'axios';

import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from "styled-components";

const PreRun = (race) => {
    const [allTag, setAllTag] = useState([]);
    const [selectedTag, setSelectedTag] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const getTag = async () => {
            try {
                const result = await axios.get(`https://archilogllele.azurewebsites.net/api/Tag`)
                setAllTag(result.data)
                const temp = []
                console.log('race', race.route.params.id)
                console.log('all', allTag)
                for (let index = 0; index < allTag.length; index++) {
                    if (allTag[index].idRace == race.route.params.id) {
                        temp.push(allTag[index])
                    }
                }
                console.log('temp', temp)
                setSelectedTag(temp)
                console.log('selectTags', selectedTag)
            } catch (error) {
                console.log(error)
            }
        }
        getTag();
    }, []);

    return (
        <Container>
            <BackButton onPress={() => navigation.navigate('Preparation')}>Back</BackButton>
            <Text>{race && race.route.params.name}</Text>

            {/* {selectedTag.map((item) => {
                return (
                    <View>
                        <Text>{item.qrcodeName}</Text>
                    </View>
                )
            })} */}

            <Text>
                {selectedTag.qrcodeName}
            </Text>
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

export default PreRun;