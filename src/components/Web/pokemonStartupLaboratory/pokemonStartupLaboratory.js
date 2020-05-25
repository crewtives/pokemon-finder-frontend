import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, StyleSheet, StatusBar, ScrollView, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

import NavbarHome from '../commons/navbar/NavbarHome'

import { connect } from 'react-redux';
import {
    getPokemonData,
    fetchClearPokemonData,
    fetchPokemonData,
    fetchSaveUserPokemonData,
    fetchGetUserPokemonData
} from '../../../actions/pokemonDataActions'
import { getPokemonStartup, fetchPokemonStartupData } from '../../../actions/pokemonStartupActions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { pad } from '../../../utils/url'

class pokemonStartupLaboratory extends Component {

    handleMainContainer = ref => this.mainContainer = ref;
    handleMainCard = ref => this.view = ref;
    handleMainLogo = ref => this.mainLogo = ref;
    handleSecLogo = ref => this.secLogo = ref;

    handlePokemonSelector = ref => this.pokemonSelector = ref;
    handleSelectedPokemon = ref => this.selectedPokemon = ref;

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.fetchGetUserPokemonData()

        this.props.getPokemonStartup()

        this.props.fetchPokemonStartupData()
    }

    randomPresentation() {
        let presentation = ['ohh... ', 'yep... ', 'good choice... ', 'its so cute.. ',]

        let selected = presentation[Math.floor(Math.random() * presentation.length)];

        return selected
    }

    _selectPokemon = (id) => {

        this.pokemonSelector.bounceOut(300).then(() => {
            this.props.getPokemonData()

            this.props.fetchPokemonData(id)
        })
    }

    _clearPokemon() {

        this.selectedPokemon.bounceOut(300).then(() => this.props.fetchClearPokemonData())

    }

    _savePokemon = (pokemon_id, user_id) => {

        this.props.fetchSaveUserPokemonData(pokemon_id, user_id)

        const { navigate } = this.props.navigation

        navigate('Home')
    }

    render() {

        return (
            <ImageBackground ref={this.handleMainContainer} blurRadius={10} source={{ uri: 'https://www.teechu.com/wp-content/uploads/2018/08/pokemon-professor-oak-facts-trivia.jpg' }} style={{ backgroundColor: '#000022', flex: 1 }}>
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
                    <View style={{ flex: 0.20 }}>
                        <View style={{ marginLeft: wp(5), marginRight: wp(5), alignSelf: 'center', flex: 0.30 }}>
                            <Text style={{
                                fontFamily: 'Raleway-Regular',
                                fontSize: hp(3),
                                textAlign: 'center',
                                marginTop: hp(5),
                                color: '#FECA1B'
                            }}>
                                Laboratory
                        </Text>
                        </View>
                        <View style={{ marginLeft: wp(5), marginRight: wp(5), alignSelf: 'center', flex: 0.70 }}>
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
                    </View>
                    {this.props.pokemon ?
                        <View style={{ alignItems: 'center', flex: 0.80, justifyContent: 'center', marginTop: hp(2) }}>
                            <Animatable.View ref={this.handleSelectedPokemon} animation="bounceIn" duration={1000} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                                borderColor: '#FECA1B',
                                borderWidth: 1,
                                padding: 5,
                                marginBottom: hp(3),
                                borderRadius: 10
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    top: 5,
                                    right: 5,
                                }}>
                                    <FontAwesome onPress={() => this._clearPokemon()} name="close" color="#FECA1B" size={32} />
                                </View>
                                <View style={{
                                    flex: 0.12,
                                }}>
                                    <Text style={{ color: 'white', fontFamily: 'Raleway-Bold', fontSize: hp(3), textAlign: 'center', marginTop: hp(1) }}>{this.randomPresentation()}{this.props.pokemon[0].name}</Text>
                                </View>
                                <View style={{
                                    flex: 0.28
                                }}>
                                    {this.props.pokemon ?
                                        <Image source={{ uri: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(this.props.pokemon[0].id, 3) + '.png' }}
                                            style={{
                                                width: 128,
                                                height: 128,
                                                resizeMode:'stretch'
                                            }} /> : <ActivityIndicator style={{ padding: 50 }} size="large" color="rgb(232, 163, 235)" />
                                    }
                                </View>
                                <View style={{
                                    flex: 0.60,
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontFamily: 'Raleway-bold',
                                        marginTop: hp(2)
                                    }}>who i am:</Text>
                                    <Text style={{ color: 'white', fontFamily: 'Raleway-Thin' }}>{this.props.pokemon.specie.flavor_text_entries[1].flavor_text}</Text>
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    backgroundColor: '#FECA1B',
                                    height: hp(5),
                                    width: '100%',
                                    justifyContent: 'center',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,

                                }}>
                                    <TouchableOpacity onPress={() => this._savePokemon(this.props.pokemon[0].id, this.props.user.id)}>
                                        <Text style={{ fontFamily: 'Raleway-Bold', textAlign: 'center' }}>OK BUDDY, YOU COME WITH ME!</Text>

                                    </TouchableOpacity>
                                </View>

                            </Animatable.View>
                        </View>
                        :
                        <Animatable.View ref={this.handlePokemonSelector} style={{ flex: 0.80 }}>
                            <ScrollView style={{ alignSelf: 'center' }}>
                                {this.props.isfetchingPokemons ?
                                    <ActivityIndicator style={{ padding: 50 }} size="large" color="rgb(232, 163, 235)" />
                                    :
                                    <FlatList
                                        horizontal
                                        pagingEnabled={true}
                                        showsHorizontalScrollIndicator={false}
                                        legacyImplementation={false}
                                        data={this.props.pokemons}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity onPress={() => this._selectPokemon(item.id)}>
                                                <Animatable.View
                                                    style={{
                                                        flex: 1,
                                                        marginHorizontal: wp(2),
                                                        marginTop: hp(5)
                                                    }}
                                                    animation="bounceInDown"
                                                    delay={250}>
                                                    <View style={{ flex: 0.50 }}>
                                                        <Image source={{ uri: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(item.id, 3) + '.png' }} style={{ width: 96, height: 96 }} />

                                                    </View>
                                                    <View style={{ flex: 0.50, margin: 10 }}>
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
                                                        }}>Type:</Text>
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
                                                    </View>


                                                </Animatable.View>
                                            </TouchableOpacity>
                                        }
                                        keyExtractor={item => item.id}
                                    />
                                }
                            </ScrollView>
                        </Animatable.View>
                    }
                </Animatable.View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.loginUser.user,
        userPokemons: state.pokemonData.userPokemons,
        pokemon: state.pokemonData.pokemon,
        isfetchingPokemon: state.pokemonData.isFeching,
        pokemons: state.pokemonStartup.pokemons,
        isfetchingPokemons: state.pokemonStartup.isFeching,
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
        getPokemonData: () => {
            return dispatch(getPokemonData())
        },
        fetchPokemonData: (id) => {
            return dispatch(fetchPokemonData(id))
        },
        fetchSaveUserPokemonData: (pokemon_id, user_id) => {
            return dispatch(fetchSaveUserPokemonData(pokemon_id, user_id))
        },
        fetchClearPokemonData: (id) => {
            return dispatch(fetchClearPokemonData())
        },
        fetchGetUserPokemonData: () => {
            return dispatch(fetchGetUserPokemonData())
        }
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
