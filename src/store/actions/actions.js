import * as actionTypes from './actionTypes'

export const onSearchChange = (searchValue) => {
    return {
        type: actionTypes.SEARCH_RESULT,
        payload: searchValue
    }
}


export const robotsData = (dispatch) => {
    dispatch({type: actionTypes.ROBOTS_PENDING,})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => dispatch({type: actionTypes.ROBOTS_SUCCESS, payload: user} ))
        .catch(error => dispatch({type: actionTypes.ROBOTS_FAIL, payload: error} ))
}
