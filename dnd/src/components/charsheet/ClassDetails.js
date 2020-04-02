import React, {useState, useEffect} from 'react';
import axios from 'axios';
import  ClassChoice from './ClassChoice';
import ClassSpell from './ClassSpell';
import ClassEquip from './ClassEquip';

const ClassDetails = (props) => {

    const initial = {
        id:"",
        index:"",
        hit_die:"",
        proficiency_choices: [],
        proficiencies: [],
        saving_throws: [],
        starting_equipment: {},
        subclasses: [],
        spellcasting: {},
        url: ""

    }

    const [selection, setSelection] = useState(initial);

    useEffect(() => {
        axios
            .get(`http://www.dnd5eapi.co${props.selection.url}`)
            .then(res =>{
                //console.log(res);
                setSelection(res.data);
                //props.setRace(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[props.selection])

    console.log("racedetails", selection);
    

    return(
        <div className="class-details-box">
            
            <div className="flex-box-row class-top-banner">
                <div className="top-banner-section">
                    <h1 className="red">{selection.name}</h1>
                
                    <div className="sub-class">
                        {selection.subclasses.map((x,i) => (
                            <div key={i} className="">
                                <p>Sub Class:{x.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="top-banner-section">
                    <h3 className="center-text saving-throw orange">Saving Throws</h3>
                    <div className="class-list-flex">
                        {selection.saving_throws.map((x,i) => (
                            <div key={i} className="">
                                <p>{x.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="top-banner-section">
                    <i className="center-text class-die-label orange">hit-die</i>
                    <i className="center-text class-die">1d{selection.hit_die}</i>
                </div>

            </div>
            <div className="class-info-box">

                {!selection.spellcasting ? "" : 
                    <ClassSpell link={selection.spellcasting.url}/>
                }

                <div>
                    <ClassEquip link={selection.starting_equipment.url} />
                </div>

                <div className="class-info-box-seperator">
                    <h3 className="center-text orange">Proficiencies</h3>
                    <div className="class-list-flex">
                        {selection.proficiencies.map((x,i) => (
                            <div key={i} className="class-list-items">
                                <p>{x.name}, </p>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        {selection.proficiency_choices.map((x,i) => (
                            <div key={i} className="">
                                <p className="center-text grey">
                                    Choose {x.choose}
                                </p>
                                
                                <ClassChoice from={x.from} choose={x.choose} selection={selection} />
                                
                            </div>
                        ))}
                    </div>
                </div>
                


                
                
                
                <div className="fine-print">
                    *Api supplies only 1 subclass. Your character assumes this subclass by default
                </div> 
            </div>
        </div>
    );
};

export default ClassDetails;