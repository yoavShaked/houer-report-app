import React from 'react';
import './style.css';

class InputField extends React.Component{
    constructor(props) {
        super(props);
        this.checkValide = this.checkValide.bind(this);
        this.state = {
            classNameNotValid: ''
        };
    }

    checkValide() {
        if (this.props.value === '') {
            this.setState({ classNameNotValid: 'not-valid' });
        }
        else{
            this.setState({ classNameNotValid: '' });
        }
    }

    render() {
        return (
            <div>
                <label>{this.props.labale}</label>
                <input className={`input-field ${this.state.classNameNotValid}`}
                value={this.props.value}
                    type="text"
                    onChange={this.props.HandleChange}
                    onBlur={this.checkValide} />
            </div>
        );
    }
}

export default InputField;