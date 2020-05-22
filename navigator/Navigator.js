import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { get } from '../src/storage/services'

import {
    ActivityIndicator,
    Platform
} from 'react-native'

import Login from '../src/components/Web/Login/Login.js';
import Onboarding from '../src/components/Web/Onboarding/Onboarding.js';

const Stack = createStackNavigator();

import * as Animatable from 'react-native-animatable';

export default class Navigator extends Component {

    constructor() {
        super();
        this.state = { fontsLoaded: false, route: 'Onboarding' };

    }

    async componentDidMount() {
        await Font.loadAsync({
            'Raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
            'Raleway-bolditalic': require('../assets/fonts/Raleway-BoldItalic.ttf'),
            'Raleway-thinitalic': require('../assets/fonts/Raleway-ThinItalic.ttf'),
            'Raleway-italic': require('../assets/fonts/Raleway-Italic.ttf'),
            'Raleway-regular': require('../assets/fonts/Raleway-Regular.ttf'),
            'Raleway-thin': require('../assets/fonts/Raleway-Thin.ttf'),
        });

        let checkLogin = await get('pokemonFinderToken')
        if (checkLogin.length > 0) {
            this.setState({
                route: 'Login',
                fontsLoaded: true
            })
        } else {
            this.setState({
                fontsLoaded: true
            })
        }

    }

    render() {
        if (Platform.OS === 'web') {
            if (this.state.fontsLoaded === true) {
                return (
                    <NavigationContainer>
                        <Stack.Navigator headerMode="none" initialRouteName={this.state.route}>
                            <Stack.Screen options={{ title: 'Onboarding' }} name="Onboarding" component={Onboarding} />
                            <Stack.Screen options={{ title: 'Login' }} name="Login" component={Login} />
                        </Stack.Navigator>
                    </NavigationContainer>
                )
            } else {
                return (

                    <Animatable.View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000022' }}>
                        <ActivityIndicator size="large" color="rgb(232, 163, 235)" />
                    </Animatable.View>
                )
            }
        }
    }
}