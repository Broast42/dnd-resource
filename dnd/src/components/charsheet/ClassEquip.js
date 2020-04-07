import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EquipChoice from './EquipChoice';
import StartEquip from './StartEquip';

const ClassEquip = (props) => {

    const inital={
        class:{},
        _id:"",
        index: "",
        starting_equipment: [],
        choices_to_make: "",
        choice_1: [],
        choice_2: [],
        url: ""

    };

    const [equip, setEquip] = useState(inital);

    useEffect(() => {
        if(props.link !== undefined){
            axios
                .get(`http://www.dnd5eapi.co${props.link}`)
                .then(res =>{
                    //console.log(res);
                    setEquip(res.data);
                    
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },[props.link,]);

    //console.log("equip", equip);

    return(
        <div>
            <h3 className="center-text orange">Equipment</h3>
            <div className="class-list-flex">
                {equip.starting_equipment.map((x,i) => (
                    <div key={i}>
                        <StartEquip 
                            x={x} 
                            startDispatch={props.startDispatch} 
                            selection={props.selection}
                            
                        />
                    </div>
                    // <p key={i} className="class-list-item">{x.quantity}x {x.item.name}</p>
                ))}
            </div>
            
            <div>
                <h4 className="center-text grey">Equipment Choices</h4>
                <p className="center-text grey">Sellect 1 option in each section</p>
                <p className="center-text grey">Make optional selections before pressing selection button</p>
                <EquipChoice 
                    equip={equip.choice_1} 
                    reset={props.link} 
                    name="ch_1"
                    equipmentChoices={props.equipmentChoices} 
                />

                <EquipChoice 
                    equip={equip.choice_2} 
                    reset={props.link} 
                    name="ch_2"
                    equipmentChoices={props.equipmentChoices} 
                />
                
                {equip.choice_3 === undefined ? "" : 
                <EquipChoice 
                    equip={equip.choice_3} 
                    reset={props.link} 
                    name="ch_3"
                    equipmentChoices={props.equipmentChoices}  
                />}
                
                {equip.choice_4 === undefined ? "" : 
                <EquipChoice 
                    equip={equip.choice_4} 
                    reset={props.link} 
                    name="ch_4"
                    equipmentChoices={props.equipmentChoices} 
                />}

                {equip.choice_5 === undefined ? "" : 
                <EquipChoice 
                    equip={equip.choice_5} 
                    reset={props.link} 
                    name="ch_5"
                    equipmentChoices={props.equipmentChoices} 
                />}
            </div>
            
        </div>
    );
};

export default ClassEquip;