import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cellAlive } from '../actions';

import Cell from '../components/cell';

class Board extends Component {
    render() {
        return (
            <div className='table-wrapper'>
                <table>
                    <tbody>
                        {this.props.board.map((row, r) =>
                            <tr key={r}>{row.map((cell, c) =>
                                <Cell key={c}
                                    status={cell.status}
                                    newBorn={cell.newBorn}
                                    handleClick={()=>this.props.cellAlive({r, c})} />
                            )}</tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ board }) {
    return { board };
}

function mapDispatchToProps(dispatch){
    return {
        cellAlive: (location) => dispatch(cellAlive(location))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
