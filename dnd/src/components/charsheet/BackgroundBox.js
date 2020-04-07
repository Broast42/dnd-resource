import React, { useState, useEffect, useReducer }  from 'react';
import { connect } from 'react-redux';
import { addBg } from '../../store/actions/index';
import { backgrounds } from '../../data';
import { useChange } from '../../hooks/useChange';
import BackDetails from "./BackDetails";

const BackgroundBox = (props) => {

    const initalLangState = {
        lang_1: "",
        lang_2: "",
    }

    const initalBackground = {
        name:"",
        skill_prof: [],
        tool_prof:[],
        equipment:[],
        money:[],
        feature: {},
        trait_options:[],
        ideal_options:[],
        bond_options: [],
        flaw_options: []
    }

    function langReducer(state, action) {
        switch (action.type){
            case 'ADD_FIRST':
                return{
                    ...state,
                    lang_1: action.payload,
                }
            case 'ADD_SECOND':
                return{
                    ...state,
                    lang_2: action.payload,
                }
            default:
                return state
        }
    }
    
    

    const [backView, backViewChange] = useChange('none');
    //background selection
    const [backSelected, setBackSelected] = useState([]);

    //to be set to state
    //tool selection
    const [tool, setTool] = useState({});
    //lang selection
    const [langChoices, langDispatch] = useReducer(langReducer, initalLangState);
    //equip selection
    const [equip, setEquip] = useState("");
    //specality
    const [specialty, setSpecality] = useState("");
    // background data w/o choices
    const [background, setBackground] = useState(initalBackground);

    
    useEffect(()=>{
        setBackSelected(backgrounds[0]);
    },[setBackSelected])
    
    useEffect(() => {
        setBackground({
            name: backSelected.name,
            skill_prof: backSelected.skill_proficiencies,
            tool_prof: backSelected.tool_proficiencies,
            equipment: backSelected.equipment,
            money: backSelected.money,
            feature: backSelected.feature,
            trait_options: backSelected.personality_trait,
            ideal_options: backSelected.ideal,
            bond_options: backSelected.bond,
            flaw_options: backSelected.flaw,
        })
        setTool({});
        setSpecality('');
    },[backSelected])

    //console.log('bg',  props.data, specialty);
    return(
        <div>
            <div className="info-box" onClick={backViewChange}>
                {props.background_name === "" ?
                    <p className="info-data grey">Add Background</p> :
                    <p className="info-data">{props.background_name}</p>    
                }
                
                <p className="info-cat">Background</p>
            </div>
            <div className={`sheet-form background-form ${backView}`}>
                <button className="background-form-x" onClick={backViewChange}>
                    x
                </button>
                <h3 className="center-text red">Select a Background</h3>
                <div className="back-names">
                    {backgrounds.map((x,i) => (
                        <div key={i} className="back-names-items" onClick={() => {setBackSelected(x)}}>
                            <p  className={backSelected.name === x.name ? "orange": ""}>
                                {x.name}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="center-text">
                    <button className="background-button" onClick={() =>{props.addBg(background, tool, equip, specialty, langChoices); backViewChange()}}>
                        Select Background
                    </button>
                </div>
                

                <BackDetails 
                    data={backSelected} 
                    setTool={setTool} 
                    langDispatch={langDispatch} 
                    tool={tool}
                    setEquip={setEquip}
                    setSpecality={setSpecality}
                    />
            </div>
        </div>
        
    );
};

const mapStateToProps = state => {
    return{
        data: state,
        background_name: state.currentCreation.background.name,
    }
}

export default connect(mapStateToProps, {addBg})(BackgroundBox);