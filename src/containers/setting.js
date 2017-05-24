import React, { Component } from 'react';
import { connect } from 'react-redux';

import RadioButtonGroup from './radiobutton_group';
import { boardResize, boardSpeed } from '../actions';

class Setting extends Component {
    render() {
        const gridSizeOptions = [{name:'Small', title:'Size: 50x30', icon:'fa fa-window-minimize', value: 'small'},
                    {name:'medium', title:'Size: 70x50', icon:'fa fa-window-restore', value: 'medium'},
                    {name:'large', title:'Size: 100x80', icon:'fa fa-window-maximize', value: 'large'}];

        const gridSpeedOptions = [{name:'slow', title:'Slow', icon:'fa fa-angle-right', value: 'slow'},
                    {name:'medium', title:'Medium', icon:'fa fa-caret-right', value: 'medium'},
                    {name:'fast', title:'Fast', icon:'fa fa-angle-double-right', value: 'fast'}];

        return (
                <div>
                    <div className='row'>
                        <div className='col col-2'></div>
                        <div className='col col-2 rb-col-2'><span className='setting-label'>Board Size:</span></div>
                        <div className='col col-6'>
                            <RadioButtonGroup options={gridSizeOptions} initalValue={'small'}
                                selectedItemCallback={this.handleSizeSelection.bind(this)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col col-2'></div>
                        <div className='col col-2 rb-col-2'><span className='setting-label'>Sim Speed:</span></div>
                        <div className='col col-6'>
                            <RadioButtonGroup options={gridSpeedOptions} initalValue={'medium'}
                                selectedItemCallback={this.handleSpeedSelection.bind(this)} />
                        </div>
                    </div>
                </div>
        );
    }

    handleSizeSelection(value) {
        this.props.boardResize(value);
    }

    handleSpeedSelection(value) {
        this.props.boardSpeed(value);
    }
}

function mapStateToProps({ state }) {
    return { state };
}

export default connect(mapStateToProps, {boardResize, boardSpeed})(Setting);
