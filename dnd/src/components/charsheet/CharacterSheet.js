import React from 'react';
import smallBanner from '../../ddbanner-sm.png';

// component imports
import NameBox from './NameBox';
import ClassBox from './ClassBox';
import BackgroundBox from './BackgroundBox';
import PlayerNameBox from './PlayerNameBox';

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
                    <div className="char-info-flex">
                        <div className="char-info-deco"></div>
                        <div className="sheet-char-info">
                            <div className="info-row">
                                <ClassBox/>
                                <BackgroundBox/>
                                <PlayerNameBox />
                                {/* template for info boxes
                                <div className="info-box">
                                    <p className="info-data">test</p>
                                    <p className="info-cat">Class</p>
                                </div> */}

                            </div>
                            <div className="info-row">

                            </div>

                        </div>
                        <div className="char-info-deco-r"></div>
                    </div>
                    
                    
                </div>
            </div>
            

        </div>
    );
};



export default CharacterSheet;