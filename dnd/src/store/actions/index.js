
export const ADD_NAME = 'ADD_NAME';

export const addName = (name) => dispatch => {
    dispatch({type: ADD_NAME, payload: name})
};