import * as actionTypes from '../types/types'
import axios from 'axios';
const API_URL = 'https://reqres.in/';


export const title = ()=>{
    return{
        type: actionTypes.TITLE
    }
}
export const subject = ()=>{
    return{
        type: actionTypes.SUBJECT
    }
}
