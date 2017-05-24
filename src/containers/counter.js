import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div className='counter-wrapper'>
                Generations: {this.props.counter}
            </div>
        );
    }
}

function mapStateToProps({ counter }) {
    return { counter };
}

export default connect(mapStateToProps)(Counter);
