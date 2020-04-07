import React from 'react';

const AbilityBonusBox = (props) => {
    return(
        <div className="ability-side-box">
            <p className="center-text">{props.name}</p>
            <div className="ability-mod">
                <p>+0</p>
            </div>
            <div className="ability-score">
                <div className="ability-score-decor">
                    <p>00</p>
                </div>

            </div>
        </div>

    );
};

export default AbilityBonusBox;