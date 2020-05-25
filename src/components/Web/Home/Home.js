import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    View,
    Text,
} from 'react-native';
import * as Linking from 'expo-linking';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import NavbarHome from '../commons/navbar/NavbarHome'
import MyPokemons from '../commons/MyPokemons/MyPokemons'

import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { getData } from '../../../actions/userActions'

class Home extends Component {

    handleMainCard = ref => this.view = ref;
    handleMainLogo = ref => this.mainLogo = ref;
    handleSecLogo = ref => this.secLogo = ref;

    constructor(props) {
        super(props);
        this.state = {
            checkLab: false
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    toLaboratory() {
        this.props.navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'pokemonStartupLaboratory',
                },
            ],
        })

    }

    render() {

        return (
            <ImageBackground ref={this.handleMainContainer} blurRadius={10} source={{ uri: 'https://i.pinimg.com/564x/d2/ea/d9/d2ead9c567843220250332203761c0d4.jpg' }} style={{ backgroundColor: '#000022', flex: 1 }}>
                <StatusBar backgroundColor='transparent' translucent barStyle='dark-content' />
                <NavbarHome />
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        margin: 25,
                        marginLeft: wp(10),
                        marginRight: wp(10)

                    }}>
                        <Animatable.View animation="bounceInLeft" duration={500} delay={2000} style={{
                            width: wp(40),
                            height: hp(80),
                            backgroundColor: '#000022',
                            borderRadius: 5,
                            marginHorizontal: 25
                        }}
                        >
                            <View style={{
                                flex: 1,
                                margin: 10,
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <View style={{
                                    flex: 0.10
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontFamily: 'Raleway-Regular',
                                        fontSize: hp(2.5),
                                        textAlign: 'center',
                                        padding: 5
                                    }}>
                                        quests
                                    </Text>

                                </View>
                                <View style={{ flex: 0.90 }}>
                                    <Animatable.View animation='bounceInUp' duration={500} delay={2500}>
                                        {this.props.userPokemons.length === 0 && this.props.user.lab_stage === 0 ?
                                            <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ height: hp(40), width: '100%' }} source={{ uri: 'https://i.pinimg.com/564x/fa/9a/b1/fa9ab12405644b30913d7c157512a0d9.jpg' }}>
                                                <View style={{
                                                    position: 'absolute',
                                                    backgroundColor: 'rgba(0, 0, 32, 0.8)',
                                                    bottom: 0,
                                                    left: 0
                                                }}>
                                                    <Text onPress={() => this.toLaboratory()} style={{
                                                        color: 'rgb(232, 163, 235)',
                                                        fontFamily: 'Raleway-Bold',
                                                        fontSize: hp(2.8),
                                                        textAlign: 'center',
                                                        textAlignVertical: 'center',
                                                        paddingTop: 10
                                                    }}> visit the laboratory
                                                </Text>
                                                    <Text onPress={() => this.toLaboratory()} style={{
                                                        color: 'rgb(232, 163, 235)',
                                                        fontFamily: 'Raleway-Regular',
                                                        fontSize: hp(2.3),
                                                        padding: 20
                                                    }}>hey {this.props.user.name}! where have you been?!... no matter, the professor Boom is waiting for you... maybe you choose a first pokemon! run before they're all over.
                                                </Text>
                                                </View>
                                            </ImageBackground>
                                            : <Text style={{
                                                color: 'rgb(232, 163, 235)',
                                                fontFamily: 'Raleway-Bold',
                                                fontSize: hp(2.8),
                                                textAlign: 'center',
                                                textAlignVertical: 'center',
                                                paddingTop: 10
                                            }}> nothing new around here...
                                                </Text>}
                                    </Animatable.View>
                                </View>

                            </View>
                        </Animatable.View>
                        <View style={{
                            width: wp(37),
                            flexDirection: 'column',
                        }}>
                            <View style={{
                            }}>
                                <Animatable.View animation="bounceInRight" duration={500} delay={2500} style={{
                                    flex: 1,
                                    backgroundColor: '#000022',
                                    borderRadius: 5,
                                    marginHorizontal: 10,
                                    height: hp(65)
                                }}
                                >

                                    <MyPokemons />


                                </Animatable.View>
                                <Animatable.View animation="bounceInRight" duration={500} delay={3000} style={{
                                    backgroundColor: '#000022',
                                    borderRadius: 5,
                                    marginHorizontal: 10,
                                    marginTop: hp(2)
                                }}
                                >
                                    <View style={{
                                        margin: 10,
                                        justifyContent: 'center',
                                        flexDirection: 'column',

                                    }}>
                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontFamily: 'Raleway-Bold',
                                                textAlign: 'center',
                                                padding: 5,
                                            }}>
                                                inventory coming soon...
                                    </Text>
                                        </View>
                                    </View>
                                </Animatable.View>
                            </View>
                            <Animatable.View animation="bounceInRight" duration={500} delay={3500} style={{
                                backgroundColor: '#000022',
                                borderRadius: 5,
                                marginHorizontal: 10,
                                marginTop: hp(2)
                            }}
                            >
                                <View style={{
                                    margin: 20,
                                }}>
                                    <Text style={{
                                        color: 'rgb(232, 163, 235)',
                                        fontFamily: 'Raleway-Bold',
                                        fontSize: hp(2.8),
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        marginBottom: hp(4),
                                        paddingTop: 10
                                    }}> follow me for more delicious adventures
                                                </Text>
                                    <View style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                        <FontAwesome style={{ marginHorizontal: wp(2) }} onPress={() => Linking.openURL('https://www.instagram.com/migue.san.martin', '_blank')} name="instagram" size={24} color="#E4A0E8" />
                                        <FontAwesome style={{ marginHorizontal: wp(2) }} onPress={() => Linking.openURL('https://twitter.com/crewtives_dev', '_blank')} name="twitter" size={24} color="#E4A0E8" />
                                        <FontAwesome style={{ marginHorizontal: wp(2) }} onPress={() => Linking.openURL('https://github.com/crewtives', '_blank')} name="github" size={24} color="#E4A0E8" />
                                        <FontAwesome style={{ marginHorizontal: wp(2) }} onPress={() => Linking.openURL('hhttps://www.linkedin.com/in/miguel-san-martin-5296971a4', '_blank')} name="linkedin" size={24} color="#E4A0E8" />
                                    </View>
                                </View>
                            </Animatable.View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.loginUser.user,
        userPokemons: state.pokemonData.userPokemons,
        fetching: state.loginUser.isFeching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            return dispatch(getData())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
