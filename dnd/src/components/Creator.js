import React, { useState } from 'react';

const Creator = () =>{

    const [nameBox, setNameBox] = useState("form-active");

    const changeActive = () => {
        if(nameBox === "form-active"){
            setNameBox("form-deactive");
            setTimeout(()=>{setNameBox("none")}, 1000);
        }else{
            setNameBox("form-active");
        }

    };

    return(
        <div className="and-logo">
            <div className={`form-box ${nameBox}`}>
                test
                <button onClick={changeActive}>Next</button>
            </div>

            <div className="form-box form-active">
                test
                <button onClick={changeActive}>Back</button>
            </div>
        </div>
    );
};

export default Creator;