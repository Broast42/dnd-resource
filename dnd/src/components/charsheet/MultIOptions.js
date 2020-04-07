import React, { useState, useEffect } from 'react';

const MultiOptions = (props) => {

    const [selectionIndex, setSelectionIndex] = useState("");
    const [selection, setSelection] = useState([]);


    useEffect(() =>{
        setSelection([props.x.from[selectionIndex]]);
    },[selectionIndex, props.x.from]);


    //console.log(`Mo selected ${props.name}`, selection);

    return(
        <div className="equip-flex">                 
            <div className={`equip-btn  ${props.name}`}  onClick={(e) => {props.selectHandel(e, props.name); props.choice(selection)}}></div>
            <div className="equip-width center-text">
                <select onChange={(e) =>{setSelectionIndex(e.target.value); }}>
                    <option value="" >Choose 1</option>
                    {props.x.from.map((y,n) =>(
                        <option key={n}  value={n}>
                            {y.item.name} x{y.quantity}
                        </option>
                    ))}
                </select>
            </div>
        </div>  
    );
};

export default MultiOptions;