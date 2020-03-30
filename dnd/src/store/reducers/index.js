import {ADD_NAME} from '../actions/index';


const initalState = {
    data: "test",
    createdChars: {
        
        slot1:{
            name: "",
            race: {
                name: "",
                languages: [],
                abilityBonus: [],
                startProf: [],
                traits:[],
                options:{
                    language: {},
                    ability: {},
                    prof: {},
                    traits: {}
                },
                selected_options:{
                    language: [],
                    ability: {},
                    prof: [],
                    traits: []
                }
            },

        },
    },
    currentCreation: {
        name: "",
        race: {
            name: "",
            languages: [],
            abilityBonus: [],
            startProf: [],
            traits:[],
            options:{
                language: {},
                ability: {},
                prof: {},
                traits: {}
            },
            selected_options:{
                language: [],
                ability: {},
                prof: [],
                traits: []
            }
            
        },
    },

}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return{
                ...state,
                currentCreation: {
                    ...state.currentCreation,
                    name: action.payload,
                }
            }
        
        default:
            return state;
    }
}