import React, { Component } from 'react';

import { View, Text, ImageBackground, StyleSheet, StatusBar, Platform, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import * as Animatable from 'react-native-animatable';

const data = [
    {
        key: 1,
        title: 'this is pokemon finder, expokemon?',
        text: 'a little game for sick fans, amazing things will happen here',
        image: require('../../../../assets/images/onboarding.jpg'),
    },
    {
        key: 2,
        title: 'all power of expo web features and crewtives ♥ on laravel engine',
        text: 'its time for wild stuffs, and maybe for a beer...',
        image: require('../../../../assets/images/onboarding1.png'),

    },
];

class Onboarding extends Component {

    handleMainCard = ref => this.view = ref;
    handleMainLogo = ref => this.mainLogo = ref;
    handleSecLogo = ref => this.secLogo = ref;

    constructor(props) {
        super(props);
        this.state = {
            navigateEnable: false
        }
    }

    _renderItem = ({ item }) => {
        return (
            <ImageBackground
                style={styles.slide}
                imageStyle={{
                    resizeMode: 'stretch',
                    height: undefined,
                    width: undefined,
                    justifyContent: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
                source={item.image}
            >
                <Animatable.View
                    animation="fadeInDown" delay={500}
                    style={{
                        position: 'absolute',
                        backgroundColor: '#000022',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}>
                    <Animatable.Text animation="fadeInDown" delay={1000} style={{
                        fontSize: hp(4),
                        fontFamily: 'Raleway-Bold',
                        margin: 20,
                        color: 'white'
                    }}>{item.title}</Animatable.Text>
                    <Animatable.Text animation="fadeInUp" delay={1000} style={{
                        fontSize: hp(2),
                        fontFamily: 'Raleway-Thin',
                        marginLeft: 20,
                        marginBottom: hp(2),
                        color: 'white'
                    }}>{item.text}</Animatable.Text>
                </Animatable.View>
            </ImageBackground>
        );
    }

    _keyExtractor = (item) => item.text;

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{
                    padding: 20, color: '#000022',
                    fontFamily: 'Raleway-bold',
                }}>NEXT</Text>
            </View>
        );
    };

    _renderPrevButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{
                    padding: 20, color: '#000022',
                    fontFamily: 'Raleway-bold',
                }}>BACK</Text>
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{
                    padding: 20, color: '#000022',
                    fontFamily: 'Raleway-bold',
                }}>LET'S GO!</Text>
            </View>
        );
    };

    toLogin() {
        this.secLogo.fadeOutDown()
        this.mainLogo.fadeOutUp()
        this.view.zoomOut().then(e => this.setState({ navigateEnable: true }, () => {
            const { navigate } = this.props.navigation
            navigate('Login')
        }))

    }

    render() {
        return (
            <View style={{ backgroundColor: '#000022', flex: 1 }}>
                <View style={{
                    marginTop: 20,
                    marginLeft: wp(25),
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
                <Animatable.View ref={this.handleMainCard} animation="bounceIn" delay={250} style={{
                    flex: 1,
                    margin: 20,
                    marginLeft: wp(25),
                    marginRight: wp(25),
                    backgroundColor: 'white',
                    borderRadius: 5
                }}
                >

                    <StatusBar backgroundColor='transparent' translucent barStyle='dark-content' />

                    <AppIntroSlider
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        data={data}
                        activeDotStyle={{ backgroundColor: 'rgb(232, 163, 235)' }}
                        dotStyle={{ backgroundColor: 'rgb(0, 0, 34)' }}
                        renderDoneButton={this._renderDoneButton}
                        renderNextButton={this._renderNextButton}
                        renderPrevButton={this._renderPrevButton}
                        onDone={() => this.toLogin()}
                        showPrevButton
                    />

                </Animatable.View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    slide: {
        height: hp(75),
        width: wp(35),
        alignSelf: 'center',
    },
    text: {
        color: '#333',
        marginTop: 92,
        textAlign: 'center',
    },
    buttonCircle: {
        borderRadius: 20,
        justifyContent: 'center',
    },

});

export default Onboarding; 