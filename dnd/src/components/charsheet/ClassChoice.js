import React, { useEffect } from 'react';
import { useCheckBox } from '../../hooks/useCheckBox';

const ClassChoice = (props) => {

    const [ setMaxLimit, maxHandle, setNum] = useCheckBox(1);

    const [profChoices, setProfChoices] = props.profChoices;

    const clearCheck = () => {
        const inputs = document.querySelectorAll('.checkbox');
        inputs.forEach(x => {
            x.checked = false;
        })
    };

    const addProfChoices = (e) => {
        setProfChoices([
            ...profChoices,
            {name: e.target.name, url: e.target.value},
        ]);
    };

    useEffect(() => {
        setMaxLimit(props.choose);
        setProfChoices([]);
        clearCheck();
        setNum(0)
    },[props.selection, props.choose, setMaxLimit, setNum, setProfChoices]);


    return(
        <div className="class-choices-flex">
                            
            {props.from.map((x,i) => (
                <div key={i} className="class-choice-item">
                    
                    <input
                        type="checkbox"
                        className="checkbox"
                        id={x.name}
                        name={x.name}
                        value={x.url}
                        onChange={(e)=>{maxHandle(e); addProfChoices(e);}}               
                        />
                    <label htmlFor={x.name}>{x.name}</label>
                
                </div>
            ))}
        </div> 
    );
};

export default ClassChoice;