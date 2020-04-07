import React from 'react';

const BackLang = (props) => {

    //console.log("bgL", props)
    return(
        <div className="margin-a-10">
            <div>
                <h3 className="center-text orange">Languages</h3>
                <p className="center-text grey">Choose {props.data.choose}</p>
                <div className="back-skill-prof">
                    <select onChange={(e) => {props.langDispatch({type: 'ADD_FIRST', payload: e.target.value })}}>
                        <option value="" >Choose 1st Language</option> 
                        {props.data.from.map((x,i) =>(
                            <option key={i} value={x.name}>
                                {x.name}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => {props.langDispatch({type: 'ADD_SECOND', payload: e.target.value })}}>
                        <option value="" >Choose 2nd Language</option> 
                        {props.data.from.map((x,i) =>(
                            <option key={i} value={x.name}>
                                {x.name}
                            </option>
                        ))}
                    </select>
                    
                </div>

            </div>
        </div>
    );
};

export default BackLang;