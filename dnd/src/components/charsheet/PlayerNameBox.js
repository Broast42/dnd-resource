import React, { useState } from 'react';
import { useChange } from '../../hooks/useChange';
import { connect } from 'react-redux';
import {addPlayerName} from '../../store/actions/index';

const PlayerNameBox = (props) => {

    const [playerView, playerViewChange] = useChange("none");
    const [playerName, setPlayerName] = useState("");
    

    const playerNameHandel = (e) => {
        setPlayerName(e.target.value);
    }

    //console.log('plyerbox', playerName);

    return(
        <div> 
            <div className="info-box" onClick={playerViewChange}>
                
                {props.player_name === "" ?
                    <p className="info-data grey">Add Name</p> :
                    <p className="info-data">{props.player_name}</p>
                }
                    
                <p className="info-cat">Player Name</p>
            </div> 
            
            <div className={`sheet-form sheet-player-name-form ${playerView}`}>
                <button className="sheet-form-x" onClick={playerViewChange} >
                    x
                </button>
                <div className="player-name">
                    <h3 className="red">Add Your Name</h3>
                    <input type="text" onChange={playerNameHandel}/>
                    <button className="player-name-submit" 
                    onClick={() => {props.addPlayerName(playerName); playerViewChange(); }}>
                        Submit Name
                    </button>

                </div>

            </div>
        </div>
        
    );
};

const mapStateToProps = state => {
    return{
        player_name: state.currentCreation.player_name,
    }
}

export default connect(mapStateToProps, { addPlayerName })(PlayerNameBox);