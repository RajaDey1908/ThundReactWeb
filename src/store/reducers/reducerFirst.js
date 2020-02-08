import * as actionTypes from '../types/types'
import { updateObjects } from '../utility/utility'

const initialState = {
    title: "",
    subject: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TITLE:
            return updateObjects({ state, title: "TITLE" })
        case actionTypes.SUBJECT:
            return updateObjects({ state, subject: "SUBJECT" })
    }
    return state
}

export default reducer