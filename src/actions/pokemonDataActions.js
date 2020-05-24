import {
    POKEMON_DATA,
    POKEMON_DATA_SUCCESS,
    POKEMON_DATA_FAILURE,
    CLEAR_POKEMON_DATA,
    SAVE_USER_POKEMON_DATA,

} from '../constants/pokemonData'

import { fetchPokemon, fetchGetUserPokemon, fetchSaveUserPokemon } from '../api/pokemonData'

export const getPokemonData = () => {
    return { type: POKEMON_DATA }
}

export const clearPokemonData = () => {
    return { type: CLEAR_POKEMON_DATA }
}

export const getPokemonDataSuccess = (pokemon) => {
    return { type: POKEMON_DATA_SUCCESS, pokemon }
}

export const getUserPokemonDataSuccess = (userPokemons) => {
    return { type: SAVE_USER_POKEMON_DATA, userPokemons }
}

export const getPokemonDataFailure = (data) => {
    return { type: POKEMON_DATA_FAILURE }
}

export const fetchPokemonData = (id) => {

    return (dispatch) => {

        fetchPokemon(id)
            .then(([response, json]) => {
                dispatch(getPokemonDataSuccess(json))
            })
            .catch((error) => console.log(error))
    }

}

export const fetchSaveUserPokemonData = (pokemon_id, user_id) => {

    return (dispatch) => {

        fetchSaveUserPokemon(pokemon_id, user_id)
            .then(([response, json]) => {
                dispatch(getUserPokemonDataSuccess(json))
            })
            .catch((error) => console.log(error))
    }

}

export const fetchGetUserPokemonData = () => {

    return (dispatch) => {

        fetchGetUserPokemon()
            .then(([response, json]) => {
                dispatch(getUserPokemonDataSuccess(json))
            })
            .catch((error) => console.log(error))
    }

}

export const fetchClearPokemonData = () => {

    return clearPokemonData()

}

