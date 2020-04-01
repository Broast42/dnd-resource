import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ClassDetails = (props) => {

    const [selection, setSelection] = useState({});

    useEffect(() => {
        axios
            .get(`http://www.dnd5eapi.co${props.selection.url}`)
            .then(res =>{
                //console.log(res);
                setSelection(res.data);
                //props.setRace(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[props.selection])

    console.log("racedetails", selection);

    return(
        <div className="race-details-box">


        </div>
    );
};

export default ClassDetails;