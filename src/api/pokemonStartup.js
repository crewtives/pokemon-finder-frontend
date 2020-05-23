import { url } from '../utils/url'
import { get } from '../storage/services';

export const fetchPokemonStartup = async() => {
    let token = await get('pokemonFinderToken')

    return fetch(url + '/getStartupPokemons', {
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