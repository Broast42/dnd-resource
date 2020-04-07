import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SkillsBox = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios
            .get(`http://www.dnd5eapi.co/api/skills/`)
            .then(res => {
                console.log(res);
                setSkills(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);

    //console.log(skills);
    return(
        <div className="skills-stats-box">
            {skills.map((x,i) => (
                <div key={i} className="skills-stats-item">
                    <div className="ability-circle" />
                    <div className="ability-bonus">bns</div>
                    <p>{x.name}</p>
                </div>
            ))}
            <p className="center-text">Skills</p>
        </div>
    );
};

export default SkillsBox;