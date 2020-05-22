import { AsyncStorage } from 'react-native';

export const save = async (item, value) => {
    try {
        await AsyncStorage.setItem(item, value);
    } catch (error) {
        console.log(error)
    }
}

export const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);

        if (value !== null) {
            return value
        } else {
            return ''
        }
    } catch (error) {
        console.log(error)
    }
}