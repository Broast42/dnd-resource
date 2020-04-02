import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ClassEquip = (props) => {

    const [equip, setEquip] = useState({});
    const [numberOf, setNumberOf] = useState(0);

    useEffect(() => {
        if(props.link !== undefined){
            axios
                .get(`http://www.dnd5eapi.co${props.link}`)
                .then(res =>{
                    //console.log(res);
                    setEquip(res.data);
                    setNumberOf(res.data.choices_to_make);
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },[props.link,]);

    console.log("equip", equip);
    console.log("numberOf", numberOf);

    return(
        <div>

        </div>
    );
};

export default ClassEquip;