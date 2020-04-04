import {ADD_NAME, ADD_PLAYER_NAME, ADD_RACE} from '../actions/index';

const initalState = {
    data: "test",
    createdChars: {
        
        slot1:{
            name: "",
            player_name: "",
            race: {
                name: "",
                languages: [],
                abilityBonus: [],
                startProf: [],
                traits:[],

            },
            race_options: {
               language: [],
                ability: [],
                prof: [],
                traits: [] 
            }
        },
    },
    currentCreation: {
        name: "",
        player_name: "",
        race: {
            name: "",
            languages: [],
            abilityBonus: [],
            startProf: [],
            traits:[],

        },
        race_options: {
            language: [],
            ability: [],
            prof: [],
            traits: [] 
        },
        class:{
            name:"",
            hit_die: "",
            subclasses:[],
            proficiencies: [],
            saving_throws: [],
            starting_equipment: [],    
        },
        proficiency_choices:[],
        equipment_options:{
            option_1:[],
            option_2:[],
            option_3:[],
            option_4:[],
            option_5:[],
        }
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
        case ADD_PLAYER_NAME:
            return{
                ...state,
                currentCreation: {
                    ...state.currentCreation,
                    player_name: action.payload,
                }
            }
        case ADD_RACE:
            return{
                ...state,
                currentCreation: {
                    ...state.currentCreation,
                    race: action.payload.race, 
                    race_options: action.payload.choices
                }
            }
        
        default:
            return state;
    }
}