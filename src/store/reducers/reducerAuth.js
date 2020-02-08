import * as actionTypes from '../types/types'
import { updateObjects } from '../utility/utility'

const initialState = {
    token: "",
    error: ""
}

const reducer = (state = initialState, action) => {
    console.log("action", action.authData)
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return updateObjects({ state, token: action.authData })
        case actionTypes.AUTH_FAIL:
            return updateObjects({ state, authData: action.authData })
    }
    return state
}

export default reducer