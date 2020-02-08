import * as actionTypes from '../types/types'
import { updateObjects } from '../utility/utility'

const initialState = {
    details: "",
    date: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DETAILS:
            return updateObjects({ state, details: action.value })
        case actionTypes.DATE:
            return updateObjects({ state, date: action.value })

    }
    return state
}

export default reducer