import React, { useState, useEffect } from 'react';
import { useChange } from '../../hooks/useChange';
import axios from 'axios';
import RaceInfo from './RaceInfo';
import { useCheckBox } from '../../hooks/useCheckBox';

const Creator = () =>{

    //form view controll hooks
    const [start, startChange]= useChange("form-active")
    const [raceBox, raceBoxChange] = useChange("none");
    const [nameBox, nameBoxChange] = useChange("none");
    const [raceOptionBox, raceOptionBoxChange] = useChange("none");

    //created character hooks

    const initalCharacter = {
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
    }

    const [character, setCharacter] = useState(initalCharacter);
    const [test, setTest] = useState({name:"",selections:[]});

    //race data hooks
    const [ raceList, setRaceList ] = useState([]);
    const [ infoSelect, setInfoSelect ] = useState("Dragonborn");
    const [ infoLink, setInfoLink ] = useState("/api/races/dragonborn")
    const [ selectedRace, setSelectedRace] = useState({});
    //race options functonality hooks
    const [setLimit, raceOptionHandle] = useCheckBox(1);


    useEffect(()=>{
        axios
            .get(`http://www.dnd5eapi.co/api/races/`)
            .then(res => {
                //console.log(res.data.results);
                setRaceList(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);

    useEffect(()=>{
         setLimit(character.race.options.ability.choose);
         console.log(character.race.options.ability.choose);
    },[character.race])

    

    const setRace = (race) => {
        setSelectedRace(race);
    };

    const addRaceToChar = () => {
        setCharacter({
            ...character,
            race: {
                name: selectedRace.name,
                languages: selectedRace.languages,
                abilityBonus: selectedRace.ability_bonuses,
                startProf: selectedRace.starting_proficiencies,
                traits: selectedRace.traits,
                options: {
                    language: selectedRace.language_options || {},
                    ability: selectedRace.ability_bonus_options || {},
                    prof: selectedRace.starting_proficiency_options || {},
                    traits: selectedRace.trait_options || {},  
                }
            }
        })
    };

    const optionHandle = (e) => {
        if(e.target.checked){
            setTest({
                ...test,
                selections: [...test.selections, e.target.value]
            })
        }else{
            const newArr = test.selections.filter(x => x !== e.target.value);
            setTest({
                ...test,
                selections: newArr
            })
        }
        
    }

    

    // console.log('selected', selectedRace);
    console.log('added race', character.race);
    console.log("test", test);

    return(
        <div className="and-logo">
            <form>
                {/* Start tab */}
                <div className={`center-text form-box ${start}`}>
                    <div className="padding5">
                        <h2 className="red">Welcome to the Character Creator</h2>
                        <h3 className="orange">
                            One of the most enjoyable aspects of D&D is character creation.
                        </h3>
                        <h3 className="orange">
                            Select the button below to get started.
                        </h3>
                    </div>
                    <div className="form-start">
                        <button onClick={(e)=> {e.preventDefault(); startChange(); raceBoxChange(); }}>Create a Character</button>
                    </div>   
                </div> 

                {/* first form tab select race*/}
                <div className={`form-box ${raceBox}`}>
                    <div>
                        <div className="center-text">
                            <h2 className="red">Let's begin by choosing a Race</h2>    
                            <p  className="orange">Select a race below to see it's details.</p>
                            <p  className="orange">Then hit next when your selection is highlited</p>
                            <h5>Note: No options for sub-races at this time.</h5>
                        </div>
                        
                        <div className="race-display">
                            <div>
                                {raceList.map((x,i)=>(
                                    <div key={i} onClick={() => {setInfoSelect(x.name); setInfoLink(x.url)}}>
                                        <h3 className={infoSelect === x.name ? "red": ""}>
                                            {x.name}
                                        </h3>
                                    </div>    
                                ))}
                            </div>
                        
                            <RaceInfo link={infoLink} setRace={setRace}/>
                        </div>
                        
                    </div>
                    <div className="flex-row-buttons">
                        <button onClick={(e)=> {e.preventDefault(); startChange();  raceBoxChange(); }}>Back</button>
                        <button onClick={(e)=>{e.preventDefault(); raceBoxChange(); raceOptionBoxChange(); addRaceToChar();}}>Next</button>
                    </div> 
                </div>
                
                {/* second form tab select race specific options or confirm*/}
                <div className={`form-box ${raceOptionBox}`}>
                    <div>
                        <h3 className="center-text red">
                            {character.race? `You've Selected: ${character.race.name}` :""}
                               
                        </h3>
                        
                        <div className="flex-box-row">
                            <h3 className="orange">Languages:</h3>
                            {character.race.languages.map((x,i)=>(
                                <p key={i} className="margin-s-10">{x.name}</p>
                            ))}
                        </div>
                        
                        <div className="flex-box-row">
                            <h3 className="orange">Ability Bonuses:</h3>
                            {character.race.abilityBonus.map((x,i)=>(
                                <p key={i} className="margin-s-10">{x.name} +{x.bonus}</p>
                            ))}
                        </div>

                        {character.race.startProf.length === 0 ? "":
                            <div className="flex-box-row">
                                <h3 className="orange">Starting Proficiencies:</h3>
                                {character.race.startProf.map((x,i)=>(
                                    <p key={i} className="margin-s-10">{x.name}</p>
                                ))}
                            </div>
                        
                        }

                        {character.race.traits.length === 0 ? "":
                        <div className="flex-box-row">
                            <h3 className="orange">Traits:</h3>
                            {character.race.traits.map((x,i)=>(
                                <p key={i} className="margin-s-10">{x.name}</p>
                            ))}
                        </div>
                        }

                        <p className="center-text">Any race specific options will appear below.</p>



                        <input type="checkbox" id="1" value="selection1" onChange={(e)=>{raceOptionHandle(e); optionHandle(e)}} />
                        <label htmlFor="1">selection 1</label>
                        <input type="checkbox" id="2" value="selection2" onChange={(e)=>{raceOptionHandle(e); optionHandle(e)}} />
                        <label htmlFor="2">selection 2</label>
                        <input type="checkbox" id="3" value="selection3" onChange={(e)=>{raceOptionHandle(e); optionHandle(e)}} />
                        <label htmlFor="3">selection 3</label>


                    </div>
                    <div className="flex-row-buttons">
                        <button onClick={(e)=>{e.preventDefault(); raceBoxChange(); raceOptionBoxChange();}}>Back</button>
                        <button onClick={(e)=>{e.preventDefault(); nameBoxChange(); raceOptionBoxChange()}}>Next</button>
                    </div>   
                </div>
                
                
                <button type="submit">submit</button>
            
            </form>

            {/* form box template
            
            <div className={`form-box ${raceBox}`}>
                <div>
                    test
                </div>
                <div className="flex-row-buttons">
                    <button onClick={(e)=> {e.preventDefault()}}>Back</button>
                    <button onClick={(e)=> {e.preventDefault()}}>Next</button>
                </div>   
            </div> 
            
            */}

        </div>
    );
};

export default Creator;