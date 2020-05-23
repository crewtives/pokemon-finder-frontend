import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer'
import pokemonStartupReducer from './pokemon/pokemonStartupReducer'

export default combineReducers({
    loginUser: loginReducer,
    pokemonStartup: pokemonStartupReducer,
})