
const initalState = {
    data: "",
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
                }
            },

        },
    },

}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}