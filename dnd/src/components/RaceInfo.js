import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TraitDescrip from './TraitDescrip';

const RaceInfo = (props) =>{

    const [race, setRace] = useState({})
    
    useEffect(()=>{
        axios
            .get(`http://www.dnd5eapi.co${props.link}`)
            .then(res =>{
                //console.log(res);
                setRace(res.data);
                props.setRace(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[props.link]);

    //console.log(race);
    

    return(
        <div className="race-info-box">
            <h3 className="center-text red">{race.name}</h3>
            
            <h3 className="orange">Alignment:</h3>
            <p>{race.alignment}</p>
            
            <h3 className="orange">Age:</h3>
            <p>{race.age}</p>
            
            <h3 className="orange">Size:</h3>
            <p>{race.size_description}</p>
            
            <h3 className="orange">Languages:</h3>
            <p>{race.language_desc}</p>
            {race.language_options ? <p>Plus {race.language_options.choose} 
                    {race.language_options.choose > 1? " Options from:": " Option from:"}
                </p>:"" 
            }
            {race.language_options? 
            <div className="race-stats">
                {race.language_options.from.map((x,i)=>(
                    <div key={i} className="padding5">
                        <p>{x.name}</p>
                    </div>
               
                ))}
            </div>    
            :""}

            <h3 className="orange">Ability Bonuses:</h3>
            <div className="race-stats">     
                {race.ability_bonuses ? race.ability_bonuses.map((x,i)=>(
                    <div key={i} className="padding5">
                        <p>{x.name} +{x.bonus}</p>
                    </div>
                )):""} 
            </div>
            {race.ability_bonus_options? 
                <p>
                    Plus {race.ability_bonus_options.choose} 
                    {race.ability_bonus_options > 1 ? " Options from:" : " Option from:"}
                </p>
            :""}
            {race.ability_bonus_options ? 
                <div className="race-stats">
                    {race.ability_bonus_options.from.map((x,i)=>(
                        <div key={i} className="padding5">
                            <p>{x.name} +{x.bonus}</p>
                        </div>
                    ))}
                </div>
            :""}

            <h3 className="orange">Starting Proficiencies:</h3>
            <div className="race-stats">
                {race.starting_proficiencies && race.starting_proficiencies.length > 0 ? 
                    race.starting_proficiencies.map((x,i)=>(
                        <div key={i} className="padding5">
                            <p>{x.name}</p>
                        </div>
                    )): <p>No Starting Proficiencies</p>
                }
            </div>
            {race.starting_proficiency_options ? 
                <p>
                Plus {race.starting_proficiency_options.choose}
                {race.starting_proficiency_options.choose > 1 ? " Options from:": " Option from:"}
                </p>:
            ""}
            <div className="race-stats">
                {race.starting_proficiency_options ? 
                    race.starting_proficiency_options.from.map((x,i) => (
                        <div key={i} className="padding5">
                            <p>{x.name}</p>
                        </div>
                    )):""
                }
            </div>
            
            {race.traits && race.traits.length !== 0 ? <h3 className="orange">Traits:</h3> : "" }
            
            <div>
                {race.traits ? 
                   race.traits.map((x,i) =>(
                        <div key={i}>
                            <p>{x.name}:</p>
                            <TraitDescrip link={x.url}/>
                        </div>
                   )) 
                :""}
            </div>
            {/* if more options for other classes other than dragonborn un comment 
                otherwise just add options to race extras selecton planed for next form tab
            <div>
                {race.trait_options ?
                    <div>
                        <p>
                            Plus {race.trait_options.choose} 
                            {race.trait_options.choose > 1 ? " Options From": " Option From"}
                        </p>
                        {race.trait_options.from.map((x,i) =>(
                            <div hey={i}>
                                <p>{x.name}</p>
                                <TraitDescrip link={x.url} />
                            </div>
                        ))}
                    </div>
                :""}
            </div> */}
            


        </div>
    );
};

export default RaceInfo;