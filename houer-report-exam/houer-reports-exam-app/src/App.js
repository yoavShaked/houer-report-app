import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NavbarHouerReports from './components/Navbar/Navbar';
import FormHouerReport from './components/FormHouersReport/FormHouerRepory';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/houer-report-form" component={FormHouerReport}/>
              <Route path="/" component={NavbarHouerReports}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
