import React from 'react';
import smallBanner from '../../ddbanner-sm.png';

// component imports
import NameBox from './NameBox';

const CharacterSheet = (props) => {


    return(
        <div className="character-sheet">
            <div className="sheet-top-row">
                <div className="sheet-top-col">
                    <img src={smallBanner} className="banner-sm" />
                    <div className="sheet-name-div">
                        <NameBox />   
                    </div>    
                </div>
                <div className="sheet-top-col">
                    
                </div>
            </div>
            

        </div>
    );
};



export default CharacterSheet;