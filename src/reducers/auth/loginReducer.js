import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../../constants/user'

const initialState = {
    user: '',
    name: 'Leonidas1',
    email: 'leonidas@gmail.com1',
    isFeching: false,
    error: false
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                name: '',
                user: '',
                email: '',
                isFeching: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                email: action.name,
                email: action.email,
                isFeching: false
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true
            }
        default:
            return state
    }
}

export default loginReducer