import React from 'react'
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    robots: [],
    searchValue: ''
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.SEARCH_ROBOTS :
                return {
                    ...state,
                    searchValue: action.payload
                }
            default:
                return state
        }
}

export default reducer