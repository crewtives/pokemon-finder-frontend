import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

import {
    fetchFilterUserPokemonData
} from '../../../../actions/pokemonDataActions'

import { connect } from 'react-redux';

class MyPokemons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchAttribute: "address.continent",
        };
    }

    componentDidMount() {
        this.props.fetchFilterUserPokemonData(this.state.searchTerm)
    }

    componentDidUpdate() {

    }

    render() {

        return (
            <View style={{
                margin: 10,
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 0.50,
                }}>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'Raleway-Regular',
                        fontSize: hp(2.5),
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>
                        your buddies
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    marginTop: hp(2)

                }}>
                    <TextInput
                        placeholder={'find your pokemon'}
                        placeholderTextColor='rgb(232, 163, 235)'

                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',

                            fontFamily: 'Raleway-Thin',
                            underlineColor: 'transparent',
                            color: 'rgb(232, 163, 235)',
                            height: hp(3.75),
                            fontSize: hp(3.75),
                            borderBottomColor: "rgb(232, 163, 235)",
                            borderBottomWidth: 1,
                            padding: hp(3),
                        }}
                        onChangeText={searchTerm => this.props.fetchFilterUserPokemonData(searchTerm)} />
                </View>
                <View style={{
                    marginTop: hp(2)

                }}>
                    {this.props.userPokemons.length > 0 ?

                        <FlatList
                            data={this.props.userPokemons}
                            renderItem={({ item }) => (

                                <TouchableOpacity style={{
                                    borderBottomColor: "rgb(232, 163, 235)",
                                    borderBottomWidth: 1,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    height: hp(15),
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        flex: .25,
                                    }}>
                                        <Image source={{ uri: item.pokemonApi.sprites.front_default }} style={{ width: 96, height: 96, alignSelf: 'center' }} />

                                    </View>
                                    <View style={{
                                        flex: .75
                                    }}>
                                        <Text style={{
                                            backgroundColor: 'transparent',
                                            fontFamily: 'Raleway-Thin',
                                            color: 'rgb(232, 163, 235)',
                                            height: hp(3.75),
                                            fontSize: hp(3.75),
                                        }}>{item.pokemonApi.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id}
                        />
                        : null}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userPokemons: state.pokemonData.userPokemons,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilterUserPokemonData: (search) => {
            return dispatch(fetchFilterUserPokemonData(search))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemons);

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
