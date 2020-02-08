import * as actionTypes from '../actions/actions'

const initialState = {
    details: "",
    date: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DETAILS:
            return {
                ...state,
                details: "DETAILS"
            }
        case actionTypes.DATE:
            return {
                ...state,
                date: "DATE"
            }

    }
    return state
}

export default reducer