import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PatientSearch from './pages/PatientSearch.js';
import PatientDetails from './pages/PatientDetails.js';
//import EncounterDetails from './pages/EncounterDetails.js';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <h1>Smart on FHIR!</h1>
        <Switch>
          <Route exact path='/' component={PatientSearch} />
          <Route path='/patient/:id' component={PatientDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
