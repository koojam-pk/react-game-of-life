import React, { Component } from 'react';
import _ from 'lodash';

import RadioButton from './radiobutton';

class RadioButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {optionValue: this.props.initalValue};
    }

    handleChange(value) {
        this.setState({optionValue: value});
        this.props.selectedItemCallback(value);
    }

    renderRadioButton() {
        return _.map(this.props.options, option => {
            return (
                <RadioButton key={'option-'+option.name}
                            name={option.name}
                            value={option.value}
                            title={option.title}
                            icon={option.icon}
                            selectedValue={this.state.optionValue}
                            selectedItemCallback={this.handleChange.bind(this)}
                />
                );
        });
    }
    render() {
        return (
            <div className='btn-group'>
                {this.renderRadioButton()}
            </div>
        );
    }
}

export default RadioButtonGroup;
