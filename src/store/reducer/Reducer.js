import * as actionTypes from '../actions/actionTypes'

const initialState = {
    searchValue: ''
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_RESULT:
            return {
                ...state,
                searchValue: action.payload
            }    
        default:
            return state
    }
} 

export default SearchReducer