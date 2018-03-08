import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CurrentPatientHome from './pages/CurrentPatientHome.js';
import PatientSearch from './pages/PatientSearch.js';
import PatientDetails from './pages/PatientDetails.js';
//import EncounterDetails from './pages/EncounterDetails.js';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <h1 className="app-title">Health Overview <i className="fa fa-heartbeat"></i></h1>
        <Switch>
          <Route exact path='/' component={CurrentPatientHome} />
          <Route exact path='/patient' component={PatientSearch} />
          <Route path='/patient/:id' component={PatientDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
