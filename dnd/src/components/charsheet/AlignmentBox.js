import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useChange } from '../../hooks/useChange';
import { alignment } from '../../data';
import AlignmentItems from './AlignmentItems';
import { addAlign } from '../../store/actions/index';

const AlignmentBox = (props) => {
    const [alignView, alignViewChange] = useChange('none');

    const [selectedItem, setSelectedItem] = useState('');
    //console.log(alignment, backgrounds);
    return(
        <div>
            <div className="info-box" onClick={alignViewChange}>
                {props.align === "" ? <p className="info-data grey">Add Alignment</p>:
                <p className="info-data">{props.align}</p>
                }
                <p className="info-cat">Alignment</p>
            </div>
            <div className={`sheet-form alignment-form ${alignView} `}>
                <button className="alignment-form-x" onClick={alignViewChange}>
                    x
                </button>
                <h3 className="center-text red">Choose an Alignment</h3> 
                <div className="center-text margin-a-10">
                    <button onClick={() => {alignViewChange(); props.addAlign(selectedItem); }}>
                        Select Alignment
                    </button>
                </div>
                
                <div className={`alignment-details`}>
                    <div className="alignment-box">
                        {alignment.map((x,i) => (
                            <AlignmentItems key={i} x={x} setItem={setSelectedItem}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        
    );
};

const mapStateToProps = state =>{
    return{
        data: state,
        align: state.currentCreation.alignment,
    }
};

export default connect(mapStateToProps, {addAlign})(AlignmentBox);