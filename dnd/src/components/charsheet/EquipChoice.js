import React, { useEffect, useState } from 'react';
import { useCheckBox } from '../../hooks/useCheckBox';
import MultiOptions from './MultIOptions';

const EquipChoice = (props) => {

    const [setLimit, checkHandle, setSelectNum] = useCheckBox(2);
    const [test, setTest] = useState({});
    
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

    useEffect(()=>{
        
        selectReset();
        setLimit(2);
        setSelectNum(0);

    },[props.reset, setLimit, setSelectNum]);
    
    
    console.log("Echoice", props.equip);
    console.log("test", test);
    return(
        <div className="equip-choice-flex">
            {props.equip.map((x,i) =>(
                <div key={i} className="equip-choice">
                    {x.choose >= x.from.length ? 
                        <div className="equip-flex">
                            <div className={`equip-btn ${props.name}`}  onClick={(e) => {selectHandel(e, props.name); setTest(x.from)}}></div>
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
                        // <div className="equip-item">
                            
                        //     <div className={`equip-btn extra-margin ${props.name}`}  onClick={(e) => {selectHandel(e, props.name);}}></div>
                            
                        //     <p className="center-text">choose 1</p>
                        //     <select >
                        //         {x.from.map((y,n) =>(
                        //             <option key={n} value={y.item.name} name={y.item.url}>
                        //                 {y.item.name} x{y.quantity}
                        //             </option>
                        //         ))}
                        //     </select>
                        // </div>
                        <MultiOptions x={x} name={props.name} selectHandel={selectHandel}/>    
                    :
                    x.choose > 1 && x.from.length > 1 ? 
                        <div className="equip-flex">

                            <div className={`equip-btn ${props.name}`}  onClick={(e) => {selectHandel(e, props.name);}}></div>
                            <div className="equip-width">
                                <p className="center-text">choose {x.choose}</p>
                                {x.from.map((y,n) => (
                                    <div className="equip-checkbox-container" key={n}>
                                        <div className="equip-checkbox">
                                        <input
                                            type="checkbox"
                                            id={y.item.url}
                                            name={y.quantity}
                                            value={y.item.name}
                                            onChange={(e) =>{checkHandle(e);}}
                                        />
                                        <label htmlFor={y.item.url}>{y.item.name} x{y.quantity}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    :""
                    }
                </div>
            ))}
            
        </div>
    );
};

export default EquipChoice;