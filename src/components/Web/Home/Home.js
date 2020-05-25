import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    View,
    Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

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
            <ImageBackground ref={this.handleMainContainer} blurRadius={10} source={{ uri: 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2019/12/Pueblo-Paleta-existe-y-Google-Maps-nos-dice-en-donde-encontrarlo.jpg?w=1280&ssl=1' }} style={{ backgroundColor: '#000022', flex: 1 }}>
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
                                    flex: 1
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontFamily: 'Raleway-Bold',
                                        textAlign: 'center',
                                        padding: 5
                                    }}>
                                        Map adventure coming soon...
                                    </Text>
                                    {this.props.userPokemons.length === 0 ?
                                        <Animatable.Text animation='shake' duration={300} onPress={() => this.toLaboratory()} style={{
                                            color: 'rgb(232, 163, 235)',
                                            fontFamily: 'Raleway-Regular',
                                            fontSize: hp(2.5),
                                            textAlign: 'center',
                                            textAlignVertical: 'center'
                                        }}> visit the laboratory
                                        </Animatable.Text> : null}
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
                                                Inventory coming soon...
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
                                    margin: 10,
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <View style={{
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                            fontFamily: 'Raleway-Bold',
                                            textAlign: 'center',
                                            padding: 5
                                        }}>
                                            News coming soon...
                                    </Text>
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
        resizeMode: 'cover',
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
