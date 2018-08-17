import axios from 'axios'
import API from './api'
import { ToastAndroid } from 'react-native'

// param type{string} 关键字
const search = async param => {
    let response = await axios
        .get(API.SEARCH + param)
        .then(ret => {
            return ret.data
        })
        .catch(error => {
            console.error(error)
        })
    let responseJson = await response

    return responseJson
}

export default {
    search
}
