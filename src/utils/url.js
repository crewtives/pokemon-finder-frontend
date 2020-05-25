export const url = 'http://localhost/pokemon-finder/public/api'

export const pad = (number, length) => {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}