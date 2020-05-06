import * as actionTypes from '../actions/actionTypes'

const initialState = {
    searchValue: ''
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_RESULT:
            return {
                ...state,
                searchValue: 
            }    
        default:
            return state
    }
} 

export default Reducer