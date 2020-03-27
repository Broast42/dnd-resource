import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TraitDescrip = (props) =>{

    const [trait, setTrait] = useState({});
    const [toggleDesc, setToggleDesc] = useState("none");
    
    useEffect(()=>{
         axios
        .get(`http://www.dnd5eapi.co${props.link}`)
        .then(res => {
            //console.log(res);
            setTrait(res.data);
        })
        .catch(err=>{
            console.log(err);
        });
    },[props.link])

    const descToggle = (e) => {
        e.preventDefault();
        if(toggleDesc === "none"){
            setToggleDesc("");
        }else{
            setToggleDesc("none");
        }
    };
   
    return(
        <div className="trait-desc">
            <button onClick={descToggle}>{toggleDesc === "none" ? "Show Details": "Hide Details"}</button>
            <div className={toggleDesc}>
                {trait.desc? trait.desc.map((x,i)=>(
                    <div key={i}>
                        <p>{x}</p>
                    </div>
                )):""}  
            </div>
            
        </div>
    );
}

export default TraitDescrip;