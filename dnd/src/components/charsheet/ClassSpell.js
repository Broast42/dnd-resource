import React, {useState, useEffect} from 'react';
import axios from 'axios';



const ClassSpell = (props) => {

    const inital = {
        class: {},
        _id: {},
        index: "",
        level: "",
        spellcasting_ability: {},
        info: [],
        url: "",
    }

    const [spell, setSpell] = useState(inital);

    

    useEffect(() => {
        if(props.link !== undefined){
           axios
            .get(`http://www.dnd5eapi.co${props.link}`)
            .then(res => {
                //console.log("spell", res);
                setSpell(res.data);
            })
            .catch(err => {
                console.log(err);
            }); 
        }
        
    },[props.link]);

    

    //console.log('spell', spell);

    return(
        <div className="class-info-box-seperator">
            <h3 className="center-text orange">Spell Casting</h3>
            <p className="center-text">Ability: {spell.spellcasting_ability.name}</p>
            <div >
                <div>
                    {spell.info.map((x,i)=>(
                        <div key={i}>
                            <h4>{x.name}:</h4>
                            <div>
                                {x.desc.map((y,z) => (
                                    <p key={`${i}${z}`}>{y}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                </div>
                
            </div>


        </div>
    );
};

export default ClassSpell;