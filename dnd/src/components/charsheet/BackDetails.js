import React from 'react';
import BackTools from './BackTools';
import BackLang from './BackLang';
import BackEquip from './BackEquip';

const BackDetails = (props) => {

    
    //console.log('bgD', props)
    return(
        <div className="back-details">
            <h3 className="center-text red">{props.data.name}</h3>
            <p>{props.data.desc}</p>
            <h3 className="center-text orange">Proficiencies</h3>
            
            <p className="center-text grey">Skills:</p>
            <div className="back-skill-prof">
                {!props.data.skill_proficiencies ? "":  
                    props.data.skill_proficiencies.map((x,i) => (
                        <p key={i}>{x.name}</p>
                    ))}
            </div>
            
            <div className="back-skill-prof">
                {!props.data.tool_proficiencies ? "" :
                    <div>
                        <p className="center-text grey margin-a-10">Tools:</p>
                        {props.data.tool_proficiencies.map((x,i)=>(
                            <p key={i}>{x.name}</p>
                        ))}    
                    </div>
                }
            </div> 
            {!props.data.tool_choices ? "":
                <BackTools data={props.data} setTool={props.setTool} setEquip={props.setEquip}/>
            }
            {!props.data.languages ? "":
                <BackLang data={props.data.languages} langDispatch={props.langDispatch}/>
            }
            {!props.data.equipment ? "":
                <div>
                    <h3 className="center-text orange">Equipment</h3>
                    <div className="back-skill-prof">
                        {props.data.equipment.map((x,i) => (
                            <div key={i}>
                                <p>{x.name} x{x.quantity}, </p>
                            </div>
                        ))}
                        {!props.data.money ? "" :
                            props.data.money.map((x,i) => (
                                <p key={i}>{x.amount}{x.type}</p>
                            ))

                        }
                        {!props.tool ? "": 
                            !props.data.equipment_choice ? "":
                                !props.data.name === "Soldier" ? "":
                                <div>    
                                    <p>{props.tool.name}</p>
                                </div>
                        }
                    </div>
                </div>
            }
            {!props.data.equipment_choice ? "":
                <BackEquip data={props.data.equipment_choice} name={props.data.name} setEquip={props.setEquip}/>
            }
            {!props.data.specialty ? "" :
                <div>
                    <h3 className="center-text orange">Specialty</h3>
                    <div className="back-skill-prof">
                        <div>
                        {props.data.specialty.map((x,i) => (
                            <div key={i}>
                                <input 
                                    type="radio" 
                                    id={x} 
                                    name="specialty" 
                                    value={x} 
                                    onChange={(e) => {props.setSpecality(e.target.value)}}
                                    />
                                <label htmlFor={x}>{x}</label>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            }
            {!props.data.feature ? "" :
            <div>
                <h3 className="center-text orange">Feature</h3>
                <h3 className="center-text">{props.data.feature.name}</h3>
                <p>{props.data.feature.desc}</p>
            </div>

            }
            

        </div>
    );
};

export default BackDetails;