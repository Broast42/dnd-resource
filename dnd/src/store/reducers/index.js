import {ADD_NAME, ADD_PLAYER_NAME, ADD_RACE, ADD_CLASS, ADD_ALIGN, ADD_BG} from '../actions/index';

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
            levels: {},    
        },
        proficiency_choices:[],
        equipment_options:{
            option_1:[],
            option_2:[],
            option_3:[],
            option_4:[],
            option_5:[],
        },
        alignment: "",
        background:{
            name:"",
            skill_prof: [],
            tool_prof:[],
            equipment:[],
            money:[],
            feature: {},
            trait_options:[],
            ideal_options:[],
            bond_options: [],
            flaw_options: [] 
        },
        background_choices:{
            tool: {},
            equip: "",
            specialty: "",
            language: {}
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
        case ADD_CLASS:
            return{
                ...state,
                currentCreation: {
                    ...state.currentCreation,
                    class: action.payload.userclass,
                    proficiency_choices: action.payload.prof,
                    equipment_options: action.payload.equip,
                }    
            }
        case ADD_ALIGN:
            return{
                ...state,
                currentCreation: {
                    ...state.currentCreation,
                    alignment: action.payload,
                }
            }
        case ADD_BG:
            return{
                ...state,
                currentCreation: {
                    ...state.currentCreation,
                    background: action.payload.background,
                    background_choices:{
                        tool: action.payload.tool,
                        equip: action.payload.equip,
                        specialty: action.payload.specialty,
                        language: action.payload.language,
                    }

                }
            }
        default:
            return state;
    }
}