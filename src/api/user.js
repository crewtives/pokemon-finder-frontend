import { url } from '../utils/url'
import { get } from '../storage/services';

export const fetchLoginUser = (name, email) => {

    return fetch(url + '/authenticate', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
    }).then(Response => {
        return Promise.all([Response, Response.json()])
    })
}

export const fetchGetUser = async () => {

    let token = await get('pokemonFinderToken')

    return fetch(url + '/getUser', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(Response => {
        return Promise.all([Response, Response.json()])
    })
}