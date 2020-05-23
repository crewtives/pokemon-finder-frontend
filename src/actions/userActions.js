import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/user'
import { fetchLoginUser, fetchGetUser } from '../api/user'
import { save } from '../storage/services'

export const getData = () => {
    return { type: LOGIN_USER }
}

export const getDataSuccess = (user) => {
    return { type: LOGIN_USER_SUCCESS, user }
}

export const getDateFailure = (data) => {
    return { type: LOGIN_USER_FAILURE }
}

export const fetchData = (name, email) => {

    return (dispatch) => {

        fetchLoginUser(name, email)
            .then(([response, json]) => {
                save('pokemonFinderToken', json.token)
                dispatch(getDataSuccess(json))
            })
            .catch((error) => console.log(error))
    }

}

export const fetchGetUserData = () => {

    return (dispatch) => {

        fetchGetUser()
            .then(([response, json]) => {
                dispatch(getDataSuccess(json))
            })
            .catch((error) => console.log(error))
    }

}
