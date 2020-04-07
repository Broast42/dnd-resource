import React from 'react';

const BackEquip = (props) => {
    return(
        <div>
            {props.name === "Soldier" ? "" :
                <div className="back-skill-prof">
                    <select onChange={(e) => {props.setEquip(e.target.value)}}>
                        <option value="">Choose 1</option>
                        {props.data.from.map((x,i) => (
                            <option key={i} value={x.name}>
                                {x.name} x{x.quantity}
                            </option>
                        ))}
                    </select>
                </div>
            }
        </div>
    );
};

export default BackEquip;