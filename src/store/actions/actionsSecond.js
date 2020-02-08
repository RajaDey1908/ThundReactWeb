import * as actionTypes from '../types/types'


export const savePayload = (value)=>{
    return{
        type: actionTypes.DETAILS,
        value:value
    }
}

export const details = (value)=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(savePayload(value))
        }, 2000);
    }
    
}
export const date = (value)=>{
    return{
        type: actionTypes.DATE,
        value:value
    }
}