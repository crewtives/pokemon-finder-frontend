const URL = 'http://localhost/pokemon-finder/public/api'

export const fetchLoginUser = (name, email) => {
    return fetch(URL + '/authenticate', {
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