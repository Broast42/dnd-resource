import React from 'react';
import smallBanner from '../../ddbanner-sm.png';

// component imports
import NameBox from './NameBox';
import ClassBox from './ClassBox';
import BackgroundBox from './BackgroundBox';
import PlayerNameBox from './PlayerNameBox';
import RaceBox from './RaceBox';
import AlignmentBox from './AlignmentBox';

const CharacterSheet = (props) => {


    return(
        <div className="character-sheet">
            <div className="sheet-top-row">
                <div className="sheet-top-col">
                    <img src={smallBanner} className="banner-sm" alt="d&d"/>
                    <div className="sheet-name-div">
                        <NameBox />   
                    </div>    
                </div>
                <div className="sheet-top-col">
                    <div className="char-info-flex">
                        <div className="char-info-deco"></div>
                        <div className="sheet-char-info">
                            <div className="info-row space-between">
                                <ClassBox/>
                                <BackgroundBox/>
                                <PlayerNameBox />
                                
                            </div>
                            <div className="info-row space-evenly">
                                <RaceBox />
                                <AlignmentBox />
                            </div>

                        </div>
                        <div className="char-info-deco-r"></div>
                    </div>    
                </div>
                
            </div>
            <div className="sheet-body-flex">
                <div className="sheet-body-col">
                    <div className="body-col-1-top col-1" >
                        <div className="body-col-1-1">

                        </div>
                        <div className="body-col-1-2">
                            <div className="insperation">
                                <div className="insperation-box">

                                </div>
                                <div className="insperation-lable">
                                    <p>Inspiration</p>
                                </div>

                            </div>
                            <div className="prof-bonus">
                                <div className="prof-bonus-lable">
                                    <p>Proficiency Bonus</p>
                                </div>
                                <div className="prof-bonus-bonus">
                                    <p>num</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="body-col-1-bottom">

                    </div>   
                </div>
                <div className="sheet-body-col">
                    
                </div>
                <div className="sheet-body-col">
                    
                </div>
            </div>

        </div>
    );
};



export default CharacterSheet;