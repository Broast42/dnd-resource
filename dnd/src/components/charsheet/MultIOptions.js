import React, { useState} from 'react';

const MultiOptions = (props) => {

    const [equipSelect, setEquipSelect] = useState([]);

    const addEquip = (e) => {
        setEquipSelect([
            ...equipSelect,
            {name: e.target.value, url: e.target.name, quantity: e.target.alt }
        ])
    };

    console.log(`${props.name}`, equipSelect);

    return(
        <div className="equip-flex">                 
            <div className={`equip-btn  ${props.name}`}  onClick={(e) => {props.selectHandel(e, props.name); }}></div>
            <div className="equip-width center-text">
                <select  onChange={(e) =>{addEquip(e); }}>
                    <option value="">Choose 1</option>
                    {props.x.from.map((y,n) =>(
                        <option key={n} alt={y.quantity} value={y.item.name} name={y.item.url}>
                            {y.item.name} x{y.quantity}
                        </option>
                    ))}
                </select>
            </div>
        </div>  
    );
};

export default MultiOptions;