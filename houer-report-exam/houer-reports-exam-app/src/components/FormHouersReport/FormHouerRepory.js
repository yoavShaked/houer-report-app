import React from 'react';
import InputField from './../InputField/InputField';
import Select from 'react-select';
import './style.css';
//import {DatePicker} from 'react-datepicker';

const options = [
    { value: '1', label: '01' },
    { value: '2', label: '02' },
    { value: '3', label: '03' },
    { value: '4', label: '04' },
    { value: '5', label: '05' },
    { value: '6', label: '06' },
    { value: '7', label: '07' },
    { value: '8', label: '08' },
    { value: '9', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '00' },
];

class FormHouerReport extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        //this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
        this.handleChangeEndTime = this.handleChangeEndTime.bind(this);

        this.state = {
            user: '',
            date: '',
            startTime: { value: '', label: '01' },
            endTime: { value: '', label: '01' }
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.formValidation();
    }

    handleChangeUser(event) {
        this.setState({ user: event.target.value });
    }

    //TODO
    formValidation() {

    }

    handleChangeStartTime(startTime) {
        this.setState({ startTime });
    }

    handleChangeEndTime(endTime) {
        this.setState({ endTime });
    }

    render() {
        return (
            <from>
                <InputField labale='email'
                    value={this.state.user}
                    HandleChange={this.handleChangeUser} />
                <div>
                    <label>Start</label>
                    <Select className="select-time"
                        value={this.state.startTime}
                        onChange={this.handleChangeStartTime}
                        options={options}>
                    </Select>
                </div>
                <div>
                    <label>End</label>
                    <Select className="select-time"
                        value={this.state.endTime}
                        onChange={this.handleChangeEndTime}
                        options={options}>
                    </Select>
                </div>
            </from>
        );
    }
}

export default FormHouerReport;