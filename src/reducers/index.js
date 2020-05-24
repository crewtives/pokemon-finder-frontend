import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer'
import pokemonStartupReducer from './pokemon/pokemonStartupReducer'
import pokemonDataReducer from './pokemon/pokemonDataReducer'

export default combineReducers({
    loginUser: loginReducer,
    pokemonData: pokemonDataReducer,
    pokemonStartup: pokemonStartupReducer,
})