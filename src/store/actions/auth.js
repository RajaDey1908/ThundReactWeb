import * as actionTypes from '../types/types'
import axios from 'axios';
const API_URL = 'https://reqres.in';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const url = `${API_URL}/api/login`;
        const payload={
            email:username,
            password:password
        }
        axios.post(url,payload).then(response => response.data)
            .then((data) => {
                console.log("data", data)
                dispatch(authSuccess(data));
            })
            .catch((error)=>{
                console.log("error", error);
                dispatch(authFail(error));
            })
        
    }
}
