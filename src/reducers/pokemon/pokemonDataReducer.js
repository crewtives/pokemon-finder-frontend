import {
    POKEMON_DATA,
    POKEMON_DATA_SUCCESS,
    POKEMON_DATA_FAILURE,
    CLEAR_POKEMON_DATA,
    SAVE_USER_POKEMON_DATA
} from '../../constants/pokemonData'

const initialState = {
    pokemon: null,
    isFeching: false,
    error: false,
    userPokemons: []
}

function pokemonDataReducer(state = initialState, action) {
    switch (action.type) {
        case POKEMON_DATA:
            return {
                ...state,
                isFeching: true
            }
        case POKEMON_DATA_SUCCESS:
            return {
                ...state,
                pokemon: action.pokemon,
                isFeching: false
            }
        case POKEMON_DATA_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true
            }
        case CLEAR_POKEMON_DATA:
            return {
                pokemon: null,
                isFeching: false,
                error: false
            }
        
        case SAVE_USER_POKEMON_DATA:
            return {
                ...state,
                userPokemons: action.userPokemons,
            }
        default:
            return state
    }
}

export default pokemonDataReducer