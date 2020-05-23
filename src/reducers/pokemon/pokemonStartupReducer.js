import { POKEMON_STARTUP, POKEMON_STARTUP_SUCCESS, POKEMON_STARTUP_FAILURE } from '../../constants/pokemonStartup'

const initialState = {
    pokemons: [],
    isFeching: false,
    error: false
}

function pokemonStartupReducer(state = initialState, action) {
    switch (action.type) {
        case POKEMON_STARTUP:
            return {
                ...state,
                isFeching: true
            }
        case POKEMON_STARTUP_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons,
                isFeching: false
            }
        case POKEMON_STARTUP_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true
            }
        default:
            return state
    }
}

export default pokemonStartupReducer