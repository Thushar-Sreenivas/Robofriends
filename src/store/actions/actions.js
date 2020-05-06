import * as actionTypes from './actionTypes'

export const search = (text) => {
    return {
        type: actionTypes.SEARCH_ROBOTS,
        payload: text

    }
}