import * as actionTypes from '../actions/actions'

const initialState = {
    title: "",
    subject: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TITLE:
            return {
                ...state,
                title: "TITLE"
            }
        case actionTypes.SUBJECT:
            return {
                ...state,
                subject: "SUBJECT"
            }
    }
    return state
}

export default reducer