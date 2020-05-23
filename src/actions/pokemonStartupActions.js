import { POKEMON_STARTUP, POKEMON_STARTUP_SUCCESS, POKEMON_STARTUP_FAILURE } from '../constants/pokemonStartup'
import { fetchPokemonStartup } from '../api/pokemonStartup'

export const getPokemonStartup = () => {
    return { type: POKEMON_STARTUP }
}

export const getPokemonStartupSuccess = (pokemons) => {
    return { type: POKEMON_STARTUP_SUCCESS, pokemons }
}

export const getPokemonStartupFailure = (data) => {
    return { type: POKEMON_STARTUP_FAILURE }
}

export const fetchPokemonStartupData = () => {

    return (dispatch) => {

        fetchPokemonStartup()
            .then(([response, json]) => {
                dispatch(getPokemonStartupSuccess(json))
            })
            .catch((error) => console.log(error))
    }

}
