const URL = 'https://baconipsum.com/api/?type=meat-and-filler'

export const fetchDataLandingApi = () => {
    return fetch(URL)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        })
}

