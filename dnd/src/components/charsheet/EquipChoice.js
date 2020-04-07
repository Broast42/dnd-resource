import React, { useEffect, useState} from 'react';
import { useCheckBox } from '../../hooks/useCheckBox';
import MultiOptions from './MultIOptions';
import CheckOptions from './CheckOptions';

const EquipChoice = (props) => {

    const [setLimit, checkHandle, setSelectNum] = useCheckBox(2);

    //single section choice
    const [equipChoice, setEquipChoice] = useState([]);

    //all choices from all sections
    const  equipDispatch = props.equipmentChoices;
    
    const selectHandel = (e, i) => {
       
        const inputs = document.querySelectorAll(`.${i}`);

        inputs.forEach(x =>{
            x.classList.remove('equip-selected');
        });
        if(!e.target.classList.contains('.equip-selected')){
            e.target.classList.add('equip-selected');
        } 
        
    };

    const selectReset = () => {
        const inputs = document.querySelectorAll('.equip-selected');
        inputs.forEach(x =>{
            x.classList.remove('equip-selected');
        });
    };

    useEffect(() =>{
        equipDispatch({type: props.name, payload: equipChoice})

    },[equipChoice, equipDispatch, props.name]);

    useEffect(()=>{
        
        selectReset();
        setLimit(2);
        setSelectNum(0);
        setEquipChoice([]);

    },[props.reset, setLimit, setSelectNum]);
    
    
    // console.log("Echoice", props.equip);
   //console.log(`Ec ${props.name}`, equipChoice);
    return(
        <div className="equip-choice-flex">
            {props.equip.map((x,i) =>(
                <div key={i} className="equip-choice">
                    {x.choose >= x.from.length ? 
                        <div className="equip-flex">
                            <div className={`equip-btn ${props.name}`}  onClick={(e) => {selectHandel(e, props.name); setEquipChoice(x.from)}}></div>
                                <div>
                                    {x.from.map((y,n) => (
                                        <div key={n} className="equip-width center-text">
                                        
                                            <p className="">{y.item.name} x{y.quantity}</p>
                                    
                                        </div>
                                    ))}
                                </div>
                                 
                        </div>   
                    :
                    x.choose === 1 && x.from.length > 1 ? 
                        
                        <MultiOptions 
                            x={x} 
                            name={props.name} 
                            selectHandel={selectHandel}
                            choice={setEquipChoice}
                        />    
                    :
                    x.choose > 1 && x.from.length > 1 ? 
                        <CheckOptions  
                            x={x} 
                            name={props.name} 
                            selectHandel={selectHandel} 
                            checkHandle={checkHandle}
                            choice={setEquipChoice} 
                        />
                        
                    :""
                    }
                </div>
            ))}
            
        </div>
    );
};

export default EquipChoice;