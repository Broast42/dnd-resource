import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RaceDetails = (props) => {

    const [race, setRace] = useState({});
    
    useEffect(()=>{
        axios
            .get(`http://www.dnd5eapi.co${props.link}`)
            .then(res =>{
                //console.log(res);
                setRace(res.data);
                
            })
            .catch(err=>{
                console.log(err);
            })
    },[props.link]);

    //console.log(race);

    return(
        <div className="race-details-box">
            {!race.ability_bonuses ? "" :
                race.ability_bonuses.length > 1 ? 
                    <h3>Ability Bonuses:</h3>:
                    <h3>Ability Bonus:</h3>
            }
            <div className="race-ability-flex">
                {!race.ability_bonuses ? "" :
                    race.ability_bonuses.map((x,i) => (
                        <div key={i} className="race-ability-item">
                            <p>{x.name} +{x.bonus}</p>
                        </div>
                    ))
                }
            </div>
            
            {!race.ability_bonus_options ? "" :
                <div className="race-ability-flex">
                    <div className="race-ability-item red">
                        <p>
                            Choose {race.ability_bonus_options.choose} 
                        </p>    
                    </div>
                    {race.ability_bonus_options.from.map((x,i) => (
                        <div key={i} className="race-ability-item">
                            <p>{x.name} +{x.bonus}</p>
                        </div>
                    ))}   
                </div>    
            }
            <div>
                {!race.traits ? "" :
                
                race.traits.length === 0 ? "" : 
                    <div>
                        <h3>Traits:</h3>
                        <div className="race-ability-flex">
                            {race.traits.map((x,i) => (
                                <div key={i} className="race-trait-item">
                                    <p>{x.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                
                }
            </div>

            <div>
                {!race.starting_proficiencies ? "" :
                
                race.starting_proficiencies.length === 0 ? "" : 
                    <div>
                        <h3>Starting Proficiencies:</h3>
                        <div className="race-ability-flex">
                            {race.starting_proficiencies.map((x,i) => (
                                <div key={i} className="race-trait-item">
                                    <p>{x.name}</p>
                                </div>
                            ))}
                        </div>
                        {!race.starting_proficiency_options ? "" : 
                        <div className="race-ability-flex">
                            <div className="race-trait-item red">
                                <p>Choose {race.starting_proficiency_options.choose}</p>
                            </div>
                            {race.starting_proficiency_options.from.map((x,i) => (
                                <div key={i} className="race-trait-item">
                                    <p>{x.name}</p>
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                    
                
                }
            </div>

            <div>
                {!race.languages ? "" :
                
                race.languages.length === 0 ? "" : 
                    <div>
                        <h3>Languages:</h3>
                        <div className="race-ability-flex">
                            {race.languages.map((x,i) => (
                                <div key={i} className="race-trait-item">
                                    <p>{x.name}</p>
                                </div>
                            ))}
                        </div>
                        {!race.language_options ? "" : 
                        <div className="race-ability-flex">
                            <div className="race-trait-item red">
                                <p>Choose {race.language_options.choose}</p>
                            </div>
                            {race.language_options.from.map((x,i) => (
                                <div key={i} className="race-trait-item">
                                    <p>{x.name}</p>
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                    
                
                }
            </div>
            

            
            <h3>Description:</h3>
            <p>{race.alignment}</p>
            <p>{race.age}</p>
            <p>{race.size_description}</p>
            <p>{race.language_desc}</p>
        </div>
    );
};

export default RaceDetails;