import { FETCH_LANDING, FETCH_LANDING_SUCCESS, FETCH_LANDING_FAILURE } from '../../constants/landing'

const initialState = {
    dataLanding: [],
    isFeching: false,
    error: false
}

function landingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LANDING:
            return {
                ...state,
                user: '',
                isFeching: true
            }
        case FETCH_LANDING_SUCCESS:
            return {
                ...state,
                dataLanding: action.dataLanding,
                isFeching: false 
            }
        case FETCH_LANDING_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true
            }
        default:
            return state
    }
}

export default landingReducer