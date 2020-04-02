import React, {useState, useEffect} from 'react';
import { useChange } from '../../hooks/useChange'
import axios from 'axios';
import ClassDetails  from './ClassDetails';

const ClassBox = (props) => {

    const [classView, classViewChange] = useChange('none')

    const [classList, setClassList]= useState([]);
    const [classSelection, setClassSelection] = useState({name: "Barbarian", url: "/api/classes/barbarian"});

    useEffect(() =>{
        axios
            .get(`http://www.dnd5eapi.co/api/classes/`)
            .then(res => {
                //console.log(res);
                setClassList(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });

    },[])

    //console.log("classbox", classSelection);

    return(
        <div>
            <div className="info-box" onClick={classViewChange}>
                <p className="info-data">test</p>
                <p className="info-cat">Class</p>
            </div>
            <div className={`sheet-form class-form ${classView}`}>
                <button className="class-form-x" onClick={classViewChange}>
                    x
                </button>
                <h3 className="class-form-heading">Select a Class to see its details.</h3>
                <div className="race-list">
                    {classList.map((x,i) => (
                        <div key={i} className="race-list-items" onClick={() => {setClassSelection({name: x.name, url: x.url});}}>
                            <p className={classSelection.name === x.name ? "orange": ""}>
                                {x.name}
                            </p>
                        </div>    
                    ))}   
                </div>
                <div>
                    <ClassDetails selection={classSelection}/>
                </div>


            </div> 
        </div>
        
    );
};

export default ClassBox;