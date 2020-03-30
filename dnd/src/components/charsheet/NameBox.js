import React, { useState } from 'react';
import { useChange } from '../../hooks/useChange';
import { connect } from 'react-redux';
import { addName } from '../../store/actions/index';

const NameBox = (props) => {
    
    const [nameView, nameViewChange] = useChange("none");
    const [name, setName] = useState("");

    const nameHandle = (e) => {
        setName(e.target.value);
    }

    console.log('NameBox', props.data)

    return(
        <div>
            <div className="sheet-namebox" onClick={nameViewChange}>
                {props.data.name === "" ? 
                    <p className="grey">click here to add a name</p> : 
                    <h3>{props.data.name}</h3>
                }
            </div>
            <p>Character Name</p>
            <div className={`sheet-form sheet-name-form ${nameView}`}>
                    <button className="sheet-form-x" onClick={nameViewChange}>
                        x
                    </button>
                    <div className="name-form-info">
                        <h2 className="center-text red">
                            Select a Charcter Name
                        </h2>
                        <h3 className="center-text orange">
                            A good character name can really enhance role-play experiance.
                                                
                        </h3>
                        <p>
                            Try and choose a name that fits the race you plan on choosing. 
                            If your having trouble just fill in any name, 
                            sometimes as you continue to create your character a name will dawn on you.
                            You can always come back to change it later.
                        </p>
                        <div className="name-form-input">
                            <input type="text" onChange={nameHandle}/>
                            <button className="name-form-submit" onClick={() => {props.addName(name); nameViewChange();}}>
                                Add Name
                            </button>
                        </div>
                    
                    </div>
                </div>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        data: state.currentCreation
    }
}

export default connect(mapStateToProps, {addName})(NameBox);