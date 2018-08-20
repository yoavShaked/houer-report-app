import React from 'react';
import Select from 'react-select';
import './style.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Container,
    FormFeedback,
    FormText
} from 'reactstrap';
//import DatePicker from 'react-datepicker';

const options = [
    { value: 1, label: '01' },
    { value: 2, label: '02' },
    { value: 3, label: '03' },
    { value: 4, label: '04' },
    { value: 5, label: '05' },
    { value: 6, label: '06' },
    { value: 7, label: '07' },
    { value: 8, label: '08' },
    { value: 9, label: '09' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
    { value: 13, label: '13' },
    { value: 14, label: '14' },
    { value: 15, label: '15' },
    { value: 16, label: '16' },
    { value: 17, label: '17' },
    { value: 18, label: '18' },
    { value: 19, label: '19' },
    { value: 20, label: '20' },
    { value: 21, label: '21' },
    { value: 22, label: '22' },
    { value: 23, label: '23' },
    { value: 24, label: '00' },
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
            startTime: { value: null, label: '' },
            endTime: { value: null, label: '' },
            validate: {
                emailState: '',
                timeState: false
            }
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.formValidation();
        this.setState({ user: '' });
    }

    handleChangeUser(event) {
        this.setState({ user: event.target.value });
        this.validateEmail(event);
    }

    validateEmail(event) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;

        if (emailRex.test(event.target.value)) {
            validate.emailState = 'has-success';
        }
        else {
            validate.emailState = 'has-danger';
        }
        this.setState({ validate });
    }

    //TODO
    formValidation() {

    }

    handleChangeStartTime(startTime) {
        this.setState({ startTime });
    }

    handleChangeEndTime(endTime) {
        this.setState({ endTime });
        this.validateTimes()
    }

    validateTimes() {
        const strartVal = this.state.startTime.value;
        const endVal = this.state.endTime.value;
        const { validate } = this.state;
        if (strartVal < endVal) {
            validate.timeState = false;
        }
        else {
            validate.timeState = true;
        }
        this.setState({ validate });
    }

    render() {

        return (
            <Container className="report-form-main">
                <Form onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                value={this.state.user}
                                onChange={this.handleChangeUser}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'} />
                            <FormFeedback valid>
                                Your email looks correct.
                            </FormFeedback>
                            <FormFeedback invalid>
                                Uh oh! Looks like there is an issue with your email. Please input a correct email.
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleSelect">Start Time</Label>
                            <Select className="mdb-select colorful-select dropdown-primary"
                                value={this.state.startTime}
                                onChange={this.handleChangeStartTime}
                                options={options}>
                            </Select>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleSelect">End Time</Label>
                            <Select className="mdb-select colorful-select dropdown-primary"
                                value={this.state.endTime}
                                onChange={this.handleChangeEndTime}
                                options={options}>
                            </Select>
                            {this.state.validate.timeState && <FormText>Start Time should be lower then end time.</FormText>}
                        </FormGroup>
                    </Col>
                    <Button type="submit" color="primary">APPLY</Button>
                </Form>
            </Container>
        );
    }
}

export default FormHouerReport;