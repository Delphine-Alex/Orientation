import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Hello world!</Text>

            <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator', { screen: 'Home' })}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;