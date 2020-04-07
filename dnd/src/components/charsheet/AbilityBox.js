import React, { useState, useEffect } from 'react';
import axios from 'axios'

const AbilityBox = () => {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        axios
            .get(`http://www.dnd5eapi.co/api/ability-scores/`)
            .then(res => {
                //console.log(res);
                setAbilities(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);

    const parseName = (name) => {
        switch (name) {
            case "cha":
                return "Charisma";
            
            case "con":
                return "Constitution";
           
            case "dex":
                return "Dexterity";
        
            case "int":
                return "Intelligence";
          
            case "str": 
                return "Strength";
            
            case "wis":
                return "Wisdom";
            
            default:
                return "";
        }
    };
    
    console.log(abilities);
    return(
        <div className="ability-stats-box">
            {abilities.map((x,i) => (
                <div key={i} className="ability-item">
                    <div className="ability-circle" />
                    <div className="ability-bonus">bns</div>
                    <p>{parseName(x.index)}</p>
                </div>
            ))}
            <p className="center-text">Saving Throws</p>
        </div>
    );
};

export default AbilityBox;