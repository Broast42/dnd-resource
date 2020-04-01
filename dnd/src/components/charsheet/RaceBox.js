import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useChange } from '../../hooks/useChange';
import { connect } from 'react-redux';
import RaceDetails from './RaceDetails';
import RaceChoice from './RaceChoice';

const RaceBox = (props) => {
    //view controls
    const [raceView, raceViewChange] = useChange('none');
    const [infoView, infoViewChange] = useChange('form-active');
    const [viewChoice, viewChoiceChange] = useChange('none');

    const inital = {
        language: [],
        ability: [],
        prof: [],
        traits: []
    }
    
    //race hooks
    const [raceList, setRaceList] = useState([]);
    const [raceSelection, setRaceSelection ] = useState('Dragonborn');
    const [selectionLink, setSelectionLink] = useState('/api/races/dragonborn');
    const [options, setOptions] = useState(inital);

    

    useEffect(()=>{
        axios
            .get(`http://www.dnd5eapi.co/api/races/`)
            .then(res => {
                //console.log(res.data.results);
                setRaceList(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);

    //console.log('racebox', props.name);

    return(
        <div>
            <div className="info-box" onClick={raceViewChange}>
                {props.name === "" ? 
                    <p className="info-data grey">Add a Race</p>:
                    <p className="info-data">{props.name}</p>
                }
                
                <p className="info-cat">Race</p>
            </div>
            <div className={`sheet-form race-form ${raceView}`}>
                <button className="sheet-form-x" onClick={raceViewChange}>
                    x
                </button>
                <h3 className="center-text red">
                    Select a Race to see its details.
                </h3>
                <div className="race-list">
                    
                    {raceList.map((x,i) => (
                        <div key={i} className="race-list-items" onClick={()=>{ setRaceSelection(x.name); setSelectionLink(x.url);}}>
                            <p className={raceSelection === x.name ? "orange": ""}>
                                {x.name}
                            </p>
                        </div>    
                    ))}     
                </div>

                <div className="center-text">
                    {infoView === "none" ? 
                    <button className="race-form-back" onClick={() => { viewChoiceChange(); infoViewChange(); setOptions(inital); }}>
                       Back to race selection
                    </button> 
                    : 
                    <button className="race-form-submit" onClick={() => {infoViewChange(); viewChoiceChange();}}>
                        Select Race
                    </button>
                    }
                </div>

                <div className={`${infoView}`}>
                   <RaceDetails link={selectionLink}/> 
                </div>
                <div className={`${viewChoice}`}>
                    <RaceChoice 
                        link={selectionLink} 
                        change={raceViewChange} 
                        options={options}
                        setOptions={setOptions}
                    />
                </div>
                

            </div>
        </div>
        
    );
};

const mapStateToProps = state =>{
    return{
        name: state.currentCreation.race.name
    }
}

export default connect(mapStateToProps)(RaceBox);