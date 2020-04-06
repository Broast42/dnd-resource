import React, {useState} from 'react';

const AlignmentItems = (props) => {

    const [selected, setSelected] = useState(false);
    const [view, setView] = useState('');

    const toggleSelected = () => {
        const inputs = document.querySelectorAll('.align-selected');
        
        inputs.forEach(x =>{
            x.classList.remove('align-selected');
        });

        if(selected === false){  
            setSelected(true);
            setView('align-selected');
            
        }else if(selected === true){
            setSelected(false);
            setView('');
        }
    };


    return(
        <div className={`align-item-box ${view}`} onClick={() => {toggleSelected(); props.setItem(props.x.name);}}>
            <div className="align-label">
                <h4 className="center-text">{props.x.name}</h4>
            </div>
            <div className="align-desc">
                {props.x.name === "Chaotic neutral" || props.x.name === "Neutral evil" || props.x.name === "Chaotic evil"?
                    <i className="white">{props.x.desc}</i> :
                    <i className="">{props.x.desc}</i> 
                }
                                    
            </div>    
                                    
        </div>
    );
};

export default AlignmentItems;