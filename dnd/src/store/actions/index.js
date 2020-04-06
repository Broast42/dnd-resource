
export const ADD_NAME = 'ADD_NAME';
export const ADD_PLAYER_NAME = 'ADD_PLAYER_NAME';
export const ADD_RACE = 'ADD_RACE';
export const ADD_CLASS = 'ADD_CLASS';
export const ADD_ALIGN = 'ADD_ALIGN';

export const addName = (name) => dispatch => {
    dispatch({type: ADD_NAME, payload: name})
};

export const addPlayerName = (name) => dispatch => {
    dispatch({type: ADD_PLAYER_NAME, payload: name})
};

export const addRace = (race, choices) => dispatch =>{
    dispatch({type: ADD_RACE, payload: {race: race, choices: choices}})
};

export const addClass = (userclass, prof_choices, equip_choices) => dispatch =>{
    dispatch({type: ADD_CLASS, payload: {userclass: userclass, prof: prof_choices, equip: equip_choices}})
};

export const addAlign = (alignment) => dispatch =>{
    dispatch({type: ADD_ALIGN, payload: alignment});
};