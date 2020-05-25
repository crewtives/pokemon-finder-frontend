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
import { FontAwesome } from '@expo/vector-icons';

import {
    fetchFilterUserPokemonData
} from '../../../../actions/pokemonDataActions'
import { pad } from '../../../../utils/url'

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
                    marginTop: hp(2),
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <TextInput
                            placeholder={'find your pokemon'}
                            placeholderTextColor='rgb(232, 163, 235)'
                            value={this.state.searchTerm}
                            onChangeText={(searchTerm) => this.setState({ searchTerm })}
                            style={{
                                flex:0.90,
                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                fontFamily: 'Raleway-Thin',
                                color: 'rgb(232, 163, 235)',
                                height: hp(3.75),
                                fontSize: hp(3.75),
                                borderBottomColor: "rgb(232, 163, 235)",
                                borderBottomWidth: 1,
                                padding: hp(3),
                            }}
                        />
                        <FontAwesome onPress={() => this.props.fetchFilterUserPokemonData(this.state.searchTerm)}
                            iconStyle={{
                                textAlignVertical: 'center'
                            }}
                            style={{
                                marginHorizontal: wp(2),
                                flex:0.10,
                                marginTop: hp(1)
                            }} name="search" size={24} color="#E4A0E8" />
                    </View>

                </View>
                <View style={{
                    marginTop: hp(2)

                }}>
                    {this.props.userPokemons.length > 0 ?

                        <FlatList
                            data={this.props.userPokemons}
                            keyExtractor={item => 'list-pokemon-' + item.id}
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
                                        justifyContent: 'center',

                                    }}>
                                        {item.pokemonApi ? <Image source={{
                                            uri: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(item.pokemonApi.id, 3) + '.png'
                                        }}
                                            style={{ width: 72, height: 72, alignSelf: 'center' }}
                                        /> : null}
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
                                        }}>{item.pokemonApi ? item.pokemonApi.name : null}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
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
