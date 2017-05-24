import React, {Component} from 'react';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedValue:this.props.selectedValue};
    }
    render() {
        var customiseClass = 'btn btn-secondary btn-wrapper ' + (this.props.selectedValue === String(this.props.value ) ? 'btn-highlighted':'');
        return (
            <label className={customiseClass} key={'option-'+this.props.name}>
                <input type='radio'
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    autoComplete='off'
                    className='setting-input-wrapper'
                    onChange={this.handleChange.bind(this)} />
                <span><i className={this.props.icon}></i></span> <span className='hidden-sm-down'>{this.props.title}</span>
            </label>
        );
    }
    handleChange(event) {
        this.props.selectedItemCallback(event.target.value);
    }
}

export default RadioButton;
