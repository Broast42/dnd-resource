
export const ADD_NAME = 'ADD_NAME';
export const ADD_PLAYER_NAME = 'ADD_PLAYER_NAME';

export const addName = (name) => dispatch => {
    dispatch({type: ADD_NAME, payload: name})
};

export const addPlayerName = (name) => dispatch => {
    dispatch({type: ADD_PLAYER_NAME, payload: name})
};