import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEmployyesByMonth} from '../../actions/index';
import Select from 'react-select';
import {Table, Button, Label} from 'reactstrap';
import './style.css';

const options = [
    {
        value: 'january',
        label: 'January'
    }, {
        value: 'february',
        label: 'February'
    }, {
        value: 'march',
        label: 'March'
    }, {
        value: 'april',
        label: 'April'
    }, {
        value: 'may',
        label: 'May'
    }, {
        value: 'june',
        label: 'June'
    }, {
        value: 'july',
        label: 'July'
    }, {
        value: 'august',
        label: 'August'
    }, {
        value: 'september',
        label: 'September'
    }, {
        value: 'october',
        label: 'October'
    }, {
        value: 'november',
        label: 'November'
    }, {
        value: 'december',
        label: 'December'
    }
];

class AggregationReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            month: {
                value: '',
                label: ''
            },
            showTable: false
        };

        this.selectChange = this
            .selectChange
            .bind(this);
        this.clickFilterEvent = this
            .clickFilterEvent
            .bind(this);
    }

    selectChange(month) {
        this.setState({month});
        var {showTable} = this.state;

        if (showTable) {
            showTable = false;
            this.setState({showTable});
        }
    }

    clickFilterEvent() {
        const {month} = this.state;
        var {showTable} = this.state;

        if (!showTable && month.value !== '') {
            this
                .props
                .getEmployyesByMonth(month.value);
            showTable = true;
            this.setState({showTable});
        }
    }

    renderEmployees() {
        return this
            .props
            .employees
            .map((employe, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td >{`${employe.userName}`}</td>
                        <td>{`${employe.avgPerDay}`}</td>
                        <td>{`${employe.sum}`}</td>
                        <td>{`${employe.sumExtraHouers}`}</td>
                    </tr>
                )
            });
    }

    render() {
        return (
            <div>
                <div className="main-header">
                    <h1 className="title">
                        Monthly Report
                    </h1>
                </div>
                <div className="main">
                    <div >
                        <Label className="select-label">Select Month</Label>
                        <Select
                            className="mdb-select colorful-select dropdown-secondary select-month"
                            value={this.state.month}
                            onChange={this.selectChange}
                            options={options}></Select>
                        <div className="filter-button">
                            <Button color="secondary" onClick={this.clickFilterEvent}>Filter</Button>
                        </div>
                        {this.state.showTable && <div className="table-responsive-md center">
                            <Table hover className="table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Avg Houers (per day)</th>
                                        <th scope="col">Total Houers</th>
                                        <th scope="col">Extra Houers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderEmployees()}
                                </tbody>
                            </Table>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getEmployyesByMonth: getEmployyesByMonth
    }, dispatch);
}

function mapStateToProps(state) {
    return {employees: state.employees};
}

export default connect(mapStateToProps, mapDispatchToProps)(AggregationReport);