import React, { useEffect } from 'react';
import { useCheckBox } from '../../hooks/useCheckBox';

const ClassChoice = (props) => {

    const [ setMaxLimit, maxHandle, setNum] = useCheckBox(1);

    const clearCheck = () => {
        const inputs = document.querySelectorAll('.checkbox');
        inputs.forEach(x => {
            x.checked = false;
        })
    };

    useEffect(() => {
        setMaxLimit(props.choose);
        
        clearCheck();

    },[props.selection, props.choose, setMaxLimit]);

    useEffect(() => {
        setNum(0)
    },[props.selection, setNum]);

    return(
        <div className="class-choices-flex">
                            
            {props.from.map((x,i) => (
                <div key={i} className="class-choice-item">
                    <div>
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={x.name}
                            name={x.name}
                            value={x.url}
                            onChange={(e)=>{maxHandle(e); }}               
                            />
                        <label htmlFor={x.name}>{x.name}</label>
                    </div>
                </div>
            ))}
        </div> 
    );
};

export default ClassChoice;