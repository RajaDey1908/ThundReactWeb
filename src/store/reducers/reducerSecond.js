import * as actionTypes from '../types/types'

const initialState = {
    details: "",
    date: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DETAILS:
            return {
                ...state,
                details: action.value
            }
        case actionTypes.DATE:
            return {
                ...state,
                date: action.value
            }

    }
    return state
}

export default reducer