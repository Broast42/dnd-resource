import React, { useState, useEffect, useReducer } from 'react';

const CheckOptions = (props) => {

    function reducer(state, action) {
        switch (action.type) {
            case 'ADD':
                return [
                    ...state,
                    action.payload
                ]
            case 'REMOVE':
                return action.payload;
            
            default:
                return state;

        }
    }

    const [selectionIndex, setSelectionIndex] = useState("");
    const initalSelection = []
    const [selection, dispatch] = useReducer(reducer, initalSelection)

    const addIndex = (e) => {
        //console.log('add', selection.item.name);
        if(e.target.checked){
            setSelectionIndex(e.target.value);
        }else {
             const newArr = selection.filter(x => x.item.name !== e.target.id);
            // setSelection(newArr);
            dispatch({type: 'REMOVE', payload: newArr});
        }
    }

    useEffect(() => {
        if(selectionIndex !== ""){
            dispatch({type: 'ADD', payload: props.x.from[selectionIndex]});
        }
    },[selectionIndex, props.x.from]);

    console.log("ckbox", selection);

    return(
        <div className="equip-flex">

            <div className={`equip-btn ${props.name}`}  onClick={(e) => {props.selectHandel(e, props.name); props.choice(selection)}}></div>
                <div className="equip-width">
                    <p className="center-text">choose {props.x.choose}</p>
                    {props.x.from.map((y,n) => (
                        <div className="equip-checkbox-container" key={n}>
                            <div className="equip-checkbox">
                                <input
                                    type="checkbox"
                                    id={y.item.name}
                                    value={n}
                                    onChange={(e) =>{props.checkHandle(e); addIndex(e); }}
                                />
                                <label htmlFor={y.item.name}>{y.item.name} x{y.quantity}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default CheckOptions;