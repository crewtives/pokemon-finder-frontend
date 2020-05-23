import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, StyleSheet, StatusBar, Platform, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

import NavbarHome from '../commons/navbar/NavbarHome'

import { connect } from 'react-redux';
import { fetchGetUserData } from '../../../actions/userActions'
import { getPokemonStartup, fetchPokemonStartupData } from '../../../actions/pokemonStartupActions'

class pokemonStartupLaboratory extends Component {

    handleMainCard = ref => this.view = ref;
    handleMainLogo = ref => this.mainLogo = ref;
    handleSecLogo = ref => this.secLogo = ref;

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.getPokemonStartup()

        this.props.fetchPokemonStartupData()

        this.props.fetchGetUserData()

    }

    render() {
        return (
            <ImageBackground blurRadius={10} source={{ uri: 'https://www.teechu.com/wp-content/uploads/2018/08/pokemon-professor-oak-facts-trivia.jpg' }} style={{ backgroundColor: '#000022', flex: 1 }}>
                <StatusBar backgroundColor='transparent' translucent barStyle='dark-content' />
                <NavbarHome />
                <Animatable.View ref={this.handleMainCard} animation="bounceIn" delay={250} style={{
                    flex: 1,
                    margin: 20,
                    marginLeft: wp(25),
                    marginRight: wp(25),
                    backgroundColor: '#000022',
                    borderRadius: 5
                }}
                >
                    <View style={{ margin: 20, alignSelf: 'center' }}>
                        <Text style={{
                            fontFamily: 'Raleway-Bold',
                            fontSize: hp(3),
                            textAlign: 'center',
                            marginTop: hp(5),
                            color: 'white'
                        }}>
                            hey, glad to see you, did you think i was going to leave you alone in the wild world? choose your pokemon:
                        </Text>
                    </View>
                    <View style={{ margin: 20, alignSelf: 'center' }}>
                        {this.props.isfetchingPokemon ?
                            <ActivityIndicator size="large" color="rgb(232, 163, 235)" />
                            :
                            <FlatList
                                horizontal={true}
                                data={this.props.pokemons}
                                renderItem={({ item }) =>
                                    <Animatable.View style={{
                                        marginHorizontal: wp(2),
                                    }} animation="bounceInDown" delay={250}>
                                        <Image source={{ uri: item.sprites.front_default }} style={{ width: 128, height: 128 }} />
                                        <Text style={{
                                            color: '#feca1b',
                                            fontFamily: 'Raleway-Bold',
                                            textTransform: 'capitalize',
                                        }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            color: 'white',
                                            fontFamily: 'Raleway-Thin',
                                            textTransform: 'capitalize',
                                            marginTop: hp(2)
                                        }}>Types:</Text>
                                        <View style={{
                                            flexDirection: 'column',
                                            marginTop: hp(1)
                                        }}>
                                            {item.types.map((item) => {
                                                return (
                                                    <Text style={{
                                                        color: 'white',
                                                        textTransform: 'capitalize',
                                                        fontFamily: 'Raleway-Bold',

                                                    }}>{item.type.name} </Text>
                                                )
                                            })}
                                        </View>


                                    </Animatable.View>
                                }
                                keyExtractor={item => item.id}
                            />
                        }
                    </View>

                </Animatable.View>
            </ImageBackground>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        pokemons: state.pokemonStartup.pokemons,
        isfetchingPokemon: state.pokemonStartup.isFeching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPokemonStartup: () => {
            return dispatch(getPokemonStartup())
        },
        fetchPokemonStartupData: () => {
            return dispatch(fetchPokemonStartupData())
        },
        fetchGetUserData: () => {
            return dispatch(fetchGetUserData())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(pokemonStartupLaboratory);

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
