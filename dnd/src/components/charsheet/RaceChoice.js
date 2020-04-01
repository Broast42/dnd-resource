import React, {useState, useEffect} from 'react';
import {useCheckBox} from '../../hooks/useCheckBox';
import { addRace } from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';

const RaceChoice = (props) => {

    const initalRace= {
        name: "",
        languages: [],
        abilityBonus: [],
        startProf: [],
        traits:[],
    }

    const options = props.options;
    const setOptions = props.setOptions

    const [race, setRace] = useState({});
    const [raceSelection, setRaceSelection] = useState(initalRace);
    // const [options, setOptions] = useState(initalOption);
    
    const [test, setTest] = useState([]);

    //checkbox hooks
    const [setAbility, abilityOption, abilityNum] = useCheckBox(1);
    const [setTrait, traitOption, traitNum] = useCheckBox(1);
    const [setProf, profOption, profNum] = useCheckBox(1);
    const [setLang, langOption, langNum] = useCheckBox(1);

    useEffect(()=>{
        axios
            .get(`http://www.dnd5eapi.co${props.link}`)
            .then(res =>{
                //console.log(res);
                setRace(res.data);
            })
            .catch(err=>{
                console.log(err);
            });

        
        setOptions({language:[], ability: [], prof: [], triats: []});
        abilityNum(0);
        traitNum(0);
        profNum(0);
        langNum(0);

    },[props.link]);

    useEffect(()=>{
        if(race.ability_bonus_options){
            setAbility(race.ability_bonus_options.choose);
        }else if(race.trait_options){
            setTrait(race.trait_options.choose);
        }else if(race.starting_proficiency_options){
            setProf(race.starting_proficiency_options.choose);
        }else if(race.language_options){
            setLang(race.language_options.choose); 
        }

        setRaceSelection({
            name: race.name,
            languages: race.languages,
            abilityBonus: race.ability_bonuses,
            startProf: race.starting_proficiencies,
            traits:race.traits,  
        })
                 
    },[race]);

    const testHand = e => {
        setTest([
            ...test,
            {
            name: e.target.alt,
            url: e.target.id,
            bonus: e.target.value   
            }

            ]
            );
    };

    const choiceHandle = e => {
        if(e.target.alt === "ability" && e.target.checked){
            setOptions({
                ...options,
                [e.target.alt]: [
                    ...options[e.target.alt],
                    {
                        name: e.target.name,
                        bonus: e.target.value,
                        url: e.target.id
                    }
                ]
            })
        }else if(e.target.checked){
            setOptions({
                ...options,
                [e.target.alt]: [
                    ...options[e.target.alt],
                    {
                        name: e.target.name,
                        url: e.target.id
                    }
                ]
    
    
            })
        }else {
            const newArr = options[e.target.alt].filter(x => x.name !== e.target.name);
            setOptions({
                ...options,
                [e.target.alt]: newArr
            })
        }
        
    };

    // console.log("options", options);
    // console.log("selection", raceSelection);
    // console.log("state", props.data);
  
    return(
        <div className="race-details-box">
            <div>
                {race.ability_bonus_options ||
                race.trait_options ||
                race.starting_proficiency_options ||
                race.language_options ?

                <div>
                    <h3 className="center-text">Select race specific options below.</h3>
                    
                    {!race.ability_bonus_options? "" :
                        <div>
                            <h3>Choose {race.ability_bonus_options.choose} ability bonuses</h3>
                            <div className="flex-checkbox">
                                {race.ability_bonus_options.from.map((x,i) => (
                                    <div key={i}>
                                        <input
                                            type="checkbox"
                                            id={x.url}
                                            alt="ability"
                                            name={x.name}
                                            value={x.bonus}
                                            onChange={(e)=>{abilityOption(e); choiceHandle(e)}}
                                        />
                                        <label htmlFor={x.url}>{x.name} +{x.bonus}</label>
                                    </div>
                                    
                                ))}
                            </div>    
                        </div>    
                    }
                    {!race.trait_options? "" :
                        <div>
                            <h3>Choose {race.trait_options.choose} trait</h3>
                            <div className="flex-checkbox">
                                {race.trait_options.from.map((x,i) => (
                                    <div key={i} className="trait-choice">
                                        <input
                                            type="checkbox"
                                            id={x.url}
                                            alt="traits"
                                            name={x.name}
                                            value={x.url}
                                            onChange={(e)=>{traitOption(e); choiceHandle(e)}}
                                        />
                                        <label htmlFor={x.url}>{x.name}</label>
                                    </div>
                                    
                                ))}
                            </div>

                        </div>    
                    }
                    {!race.starting_proficiency_options? "" :
                        <div>
                            <h3>Choose {race.starting_proficiency_options.choose} proficiency</h3>
                            <div className="flex-checkbox">
                                {race.starting_proficiency_options.from.map((x,i) => (
                                    <div key={i} className="trait-choice">
                                        <input
                                            type="checkbox"
                                            id={x.url}
                                            alt="prof"
                                            name={x.name}
                                            value={x.url}
                                            onChange={(e)=>{profOption(e); choiceHandle(e)}}
                                        />
                                        <label htmlFor={x.url}>{x.name}</label>
                                    </div>
                                    
                                ))}
                            </div>
                        </div>    
                    }
                    {!race.language_options? "" :
                        <div>
                            <h3>Choose {race.language_options.choose} language</h3>
                            <div className="flex-checkbox">
                                {race.language_options.from.map((x,i) => (
                                    <div key={i} className="trait-choice">
                                        <input
                                            type="checkbox"
                                            id={x.url}
                                            alt="language"
                                            name={x.name}
                                            value={x.url}
                                            onChange={(e)=>{langOption(e); choiceHandle(e)}}
                                        />
                                        <label htmlFor={x.url}>{x.name}</label>
                                    </div>
                                    
                                ))}
                            </div>

                        </div>    
                    }
                
                </div>
                
                :
                
                
                <div className="center-text">
                    <h3 >There are no race specific options.</h3> 
                    <h3>Confirm selection below.</h3>
                </div>    
                
                }
                <div className="center-text margin-a-10">
                    <button 
                    onClick={ () => {props.addRace(raceSelection, options); props.change();} }
                    className="race-form-submit">
                        Select Race
                    </button>
                </div>
                


            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        data: state.currentCreation
    }
}

export default connect(mapStateToProps, { addRace })(RaceChoice);