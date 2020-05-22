import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Constants from 'expo-constants';

class NavbarHome extends Component {

    render() {
        return (
            <View elevation={5} style={styles.navbar}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../../../assets/images/logo.png')} />
                </View>
                <TouchableOpacity style={styles.containerButtonStart}>
                    <Text style={styles.buttonStart}>Comenzar</Text>
                </TouchableOpacity>
            </View>)
    }
}

const styles = StyleSheet.create({
    navbar:{
        flexDirection:'row',
        height: '7.5%', 
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    logoContainer: { 
        justifyContent: 'center', 
        flex: 1 
    },
    logo:{
        width: 195, 
        height: 24,
        justifyContent:'center'
    },
    containerButtonStart:{
        flex:.10,
        backgroundColor:'#D6A2E8',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStart: { 
        fontFamily:'Raleway-bold',
        fontSize:hp(2.25)
    }
});

export default NavbarHome; 