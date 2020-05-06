import * as actionTypes from './actionTypes'

export const onSearchChange = (searchValue) => {
    return {
        type: actionTypes.SEARCH_RESULT,
        payload: searchValue
    }
}