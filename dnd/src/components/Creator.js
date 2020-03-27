import React, { useState, useEffect } from 'react';
import { useChange } from '../hooks/useChange';
import axios from 'axios';
import RaceInfo from './RaceInfo';

const Creator = () =>{

    //form view controll hooks
    const [raceBox, raceBoxChange] = useChange("form-active");
    const [nameBox, nameBoxChange] = useChange("none");

    //created character hooks
    

    //race data hooks
    const [ raceList, setRaceList ] = useState([]);
    const [ infoSelect, setInfoSelect ] = useState("Dragonborn");
    const [ infoLink, setInfoLink ] = useState("/api/races/dragonborn")
    const [ selectedRace, setSelectedRace] = useState({});

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

    const setRace = (race) => {
        setSelectedRace(race);
    };

    //console.log('selecte',selectedRace);

    return(
        <div className="and-logo">
            <form>
                {/* first form tab */}
                <div className={`form-box ${raceBox}`}>
                    <div>
                        <div className="center-text">
                            <h2 className="red">Welcome to the Character Creator</h2>
                            <h3 className="orange">Let's begin by choosing a Race</h3>
                            
                        </div>
                        <p>Select a Race to see it's details</p>
                        <div className="race-display">
                            <div>
                                {raceList.map((x,i)=>(
                                    <div key={i} onClick={() => {setInfoSelect(x.name); setInfoLink(x.url)}}>
                                        <h3 className={infoSelect === x.name ? "red": ""}>
                                            {x.name}
                                        </h3>
                                    </div>    
                                ))}
                            </div>
                        
                            <RaceInfo link={infoLink} setRace={setRace}/>
                        </div>

                        <input type="text" name="race" value={selectedRace.name}/>
                        
                    </div>
                    <div className="self-right">
                        <button onClick={(e)=>{e.preventDefault(); raceBoxChange(); nameBoxChange();}}>Next</button>
                    </div> 
                </div>
                
                {/* second form tab */}
                <div className={`form-box ${nameBox}`}>
                    <div>
                        test
                    </div>
                    <div className="flex-row-buttons">
                        <button onClick={(e)=>{e.preventDefault(); raceBoxChange(); nameBoxChange();}}>Back</button>
                        <button onClick={(e)=>{e.preventDefault(); nameBoxChange();}}>Next</button>
                    </div>   
                </div>
                
                
                <button type="submit">submit</button>
            
            </form>

            {/* form box template
            
            <div className={`form-box ${raceBox}`}>
                <div>
                    test
                </div>
                <div className="flex-row-buttons">
                    <button onClick={nameBoxChange}>Back</button>
                    <button onClick={nameBoxChange}>Next</button>
                </div>   
            </div> 
            
            */}

        </div>
    );
};

export default Creator;