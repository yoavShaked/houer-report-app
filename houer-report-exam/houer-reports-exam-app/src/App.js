import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NavbarHouerReports from './components/Navbar/Navbar';
import FormHouerReport from './components/FormHouersReport/FormHouerRepory';
import AggregationReport from './containers/AggregationRepot/AggregationReport';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/houer-report-form" component={FormHouerReport}/>
              <Route path="/show-reports" component={AggregationReport}/>
              <Route path="/" component={NavbarHouerReports}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
