import * as actionTypes from '../actions/actionTypes'

const initialState = {
    robots: [],
    isPending: false,
    error: ''
}

export const RobotsReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false
            }
        case actionTypes.ROBOTS_FAIL:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
    
        default:
            return state
    }
}
export default RobotsReducer