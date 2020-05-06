import React from 'react'
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    robots: [],
    searchValue: ''
}

const reducer = (state = initialState, type) => {
        switch (action.type) {
            case actionTypes.SEARCH_ROBOTS :
                return {
                    ...state,
                    searchValue: event.target.value
                }
                
        
            default:
                return state
        }
}

export default reducer