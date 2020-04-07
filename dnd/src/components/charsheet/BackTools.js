import React from "react";

const BackTools = (props) => {

    const equipSetSoldier = (item) => {
        if(props.data.name === "Soldier"){
            props.setEquip(item);
        }
    }

    return(
        <div className="margin-a-10">
            <p className="center-text grey">Choose {props.data.tool_choices.choose}</p>
            <div className="back-skill-prof">
                {props.data.tool_choices.from.map((x,i)=>(
                    <div key={i}>
                        <input
                            type="radio"
                            id={x.url}
                            name="tool"
                            value={x.name}
                            onChange={() => {props.setTool(x); equipSetSoldier(x.name)}}
                        />
                        <label htmlFor={x.url}>{x.name}</label> 
                    </div>    
                ))}

            </div>
        </div>
    );
};

export default BackTools;