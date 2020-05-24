import { url } from '../utils/url'
import { get } from '../storage/services';

export const fetchPokemon = async (id) => {
    let token = await get('pokemonFinderToken')

    return fetch(url + '/getPokemon?pokemon_id='+id+'', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(Response => {
        return Promise.all([Response, Response.json()])
    })
}

export const fetchSaveUserPokemon = async (pokemon_id, user_id) => {
    let token = await get('pokemonFinderToken')

    return fetch(url + '/saveUserPokemon', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pokemon_id: pokemon_id, user_id: user_id })
    }).then(Response => {
        return Promise.all([Response, Response.json()])
    })
}

export const fetchGetUserPokemon = async () => {

    let token = await get('pokemonFinderToken')

    return fetch(url + '/getUserPokemons', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(Response => {
        return Promise.all([Response, Response.json()])
    })
}