import React, { useEffect } from 'react';

const StartEquip = (props) => {
    
    const {x, selection, startDispatch} = props;

    useEffect(() => {
        startDispatch({type: 'START_EQUIP', payload: x});
    },[x, startDispatch])

    useEffect(()=>{

    },[selection])

    return(
        <div>
            <p className="class-list-item">{x.quantity}x {x.item.name}</p>
        </div>
    );
};

export default StartEquip;