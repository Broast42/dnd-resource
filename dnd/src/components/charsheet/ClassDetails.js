import React, {useState, useEffect ,useReducer} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from '../../store/actions/index';
import  ClassChoice from './ClassChoice';
import ClassSpell from './ClassSpell';
import ClassEquip from './ClassEquip';

const ClassDetails = (props) => {

    const initial = {
        id:"",
        index:"",
        hit_die:"",
        proficiency_choices: [],
        proficiencies: [],
        saving_throws: [],
        starting_equipment: {},
        subclasses: [],
        spellcasting: {},
        url: ""

    }

    const raceToStateInital = {
        name:"",
        hit_die: "",
        subclasses:[],
        proficiencies: [],
        saving_throws: [],
        starting_equipment: [],
    }

    const equipToStateInital = {
        option_1:[],
        option_2:[],
        option_3:[],
        option_4:[],
        option_5:[],
    }

    //useReducer reducer
    
    function equipReducer(state, action) {
        switch (action.type) {
            case 'ch_1':
                return{
                    ...state,
                    option_1: action.payload
                }
            case 'ch_2':
                return{
                    ...state,
                    option_2: action.payload
            }
            case 'ch_3':
                return{
                    ...state,
                    option_3: action.payload
                }
            case 'ch_4':
                return{
                    ...state,
                    option_4: action.payload
            }
            case 'ch_5':
                return{
                    ...state,
                    option_5: action.payload
                }
            default: 
                return state;
        }
    }

    function startReducer(state,action){
        switch (action.type) {
            case 'START_EQUIP':
                return[
                    ...state,
                    action.payload
                ]
            case 'REMOVE_EQUIP':
                return action.payload;
            default:
                return state;
        }
    }

    //user inquery hook
    const [selection, setSelection] = useState(initial);

    //state to be saved hooks
    const [userClass, setUserClass] = useState(raceToStateInital);
    const [profChoices, setProfChoices] = useState([]);
    const [equipmentChoices, ecDispatch] = useReducer(equipReducer, equipToStateInital);

    //starting equipment
    const startInital = [];
    const [startEquip, startDispatch] = useReducer(startReducer, startInital);
    

    useEffect(() => {
        axios
            .get(`http://www.dnd5eapi.co${props.selection.url}`)
            .then(res =>{
                //console.log(res);
                setSelection(res.data);
                startDispatch({type: 'REMOVE_EQUIP', payload: []})
            })
            .catch(err=>{
                console.log(err);
            })
            
    },[props.selection])

    useEffect(()=>{
        setUserClass({
            name: selection.name,
            hit_die: selection.hit_die,
            subclasses: selection.subclasses,
            proficiencies: selection.proficiencies,
            saving_throws: selection.saving_throws,
            starting_equipment: startEquip,
            levels: selection.class_levels,
        })
    },[selection, startEquip]);

    //console.log("racedetails", selection);
    // console.log("user", props.data);
    // console.log('equip', equipmentChoices);

    return(
        <div className="class-details-box">
            
            <div className="flex-box-row class-top-banner">
                <div className="top-banner-section">
                    <h1 className="red">{selection.name}</h1>
                
                    <div className="sub-class">
                        {selection.subclasses.map((x,i) => (
                            <div key={i} className="">
                                <p>Sub Class:{x.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="top-banner-section">
                    <h3 className="center-text saving-throw orange">Saving Throws</h3>
                    <div className="class-list-flex">
                        {selection.saving_throws.map((x,i) => (
                            <div key={i} className="">
                                <p>{x.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="top-banner-section">
                    <i className="center-text class-die-label orange">hit-die</i>
                    <i className="center-text class-die">1d{selection.hit_die}</i>
                </div>

            </div>
            <div className="class-info-box">

                {!selection.spellcasting ? "" : 
                    <ClassSpell link={selection.spellcasting.url}/>
                }

                <div className="class-info-box-seperator">
                    <ClassEquip 
                        link={selection.starting_equipment.url}
                        startDispatch={startDispatch}
                        selection={selection} 
                        equipmentChoices ={ecDispatch} 
                    />
                </div>

                <div >
                    <h3 className="center-text orange">Proficiencies</h3>
                    <div className="class-list-flex">
                        {selection.proficiencies.map((x,i) => (
                            <div key={i} className="class-list-items">
                                <p>{x.name}, </p>
                            </div>
                        ))}
                    </div>

                    <div className="class-info-box-seperator">
                        {selection.proficiency_choices.map((x,i) => (
                            <div key={i} className="">
                                <p className="center-text grey">
                                    Choose {x.choose}
                                </p>
                                
                                <ClassChoice 
                                    from={x.from} 
                                    choose={x.choose} 
                                    selection={selection}
                                    profChoices={[profChoices, setProfChoices]} 
                                />
                                
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="center-text ">
                    <p className="red margin-a-10">*Be sure to make all selections before selecting class*</p>
                    <button className="class-btn" onClick={() => {props.addClass(userClass, profChoices, equipmentChoices); props.changeView();}}>Select this Class</button>
                </div>
                
                <div className="fine-print">
                    *Api supplies only 1 subclass. Your character assumes this subclass by default
                </div> 
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data:state,
        
    }
}

export default connect(mapStateToProps, {addClass})(ClassDetails);