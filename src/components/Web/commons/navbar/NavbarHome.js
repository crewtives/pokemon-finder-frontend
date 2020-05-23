import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

class NavbarHome extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: wp(25),
                marginRight: wp(25)
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Animatable.Text ref={this.handleMainLogo} delay={750} animation="fadeInUp" style={{
                        fontFamily: 'Raleway-Bold',
                        fontSize: hp(3.5),
                        color: '#FECA1B'
                    }}>
                        pokemon
                    </Animatable.Text>
                    <Animatable.Text ref={this.handleSecLogo} delay={750} animation="fadeInDown" style={{
                        fontFamily: 'Raleway-Regular',
                        fontSize: hp(3.5),
                        color: '#FECA1B'
                    }}>
                        finder
                        </Animatable.Text>
                </View>
                <Animatable.View delay={750} animation="fadeIn" style={{ justifyContent: 'center', flex: 1 }}>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'Raleway-Bold',
                        fontSize: hp(2.5),
                        alignSelf:"flex-end"
                    }}>{this.props.user.name}</Text>
                </Animatable.View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.loginUser.user,
        isfetchingUser: state.loginUser.isFeching,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarHome);

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
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
    logo: {
        width: 195,
        height: 24,
        justifyContent: 'center'
    },
    containerButtonStart: {
        flex: .10,
        backgroundColor: '#D6A2E8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStart: {
        fontFamily: 'Raleway-bold',
        fontSize: hp(2.25)
    }
});
