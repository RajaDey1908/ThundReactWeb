import * as actionTypes from '../types/types'
import axios from 'axios';
const API_URL = 'https://reqres.in';


export const savePayload = (value) => {
    return {
        type: actionTypes.DETAILS,
        value: value
    }
}

export const details = (value) => {
    return dispatch => {
        setTimeout(() => {
            const url = `${API_URL}/api/users?page=2`;
            axios.get(url).then(response => response.data)
                .then((data) => {
                    console.log("data", data)
                })
            dispatch(savePayload(value))
        }, 2000);
    }
}

export const date = (value) => {
    return {
        type: actionTypes.DATE,
        value: value
    }
}