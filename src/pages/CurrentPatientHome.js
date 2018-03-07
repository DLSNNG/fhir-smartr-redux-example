import React, { Component } from 'react';
import { SmartQuery, SmartPatient, SmartPatientQuery, Resource, ResourceList, ResourceArray } from 'fhir-smartr-redux'
import PatientDetailView from '../components/PatientDetailView'
import A1CGraph from '../components/A1CGraph'
import LDLGraph from '../components/LDLGraph'
import SodiumGraph from '../components/SodiumGraph'
import GlucoseGraph from '../components/GlucoseGraph'

class CurrentPatientHome extends Component {
  // use ccf9949d-a00a-473e-8583-64731d2a86c1 as example
  render() {
    return (
      <div className="container patient-dashboard">
        <SmartPatientQuery namespace="patient" query={{ type: "Patient" }} />
        <SmartPatientQuery namespace="a1c" query={{ type: "Observation", query: { code: "4548-4", _count:10, _sort: "-date"} }} />
        <SmartPatientQuery namespace="ldl" query={{ type: "Observation", query: { code: "18262-6", _count:10, _sort: "-date"} }} />
        <SmartQuery namespace="sodium" query={{ type: "Observation", query: { code: "2947-0", _count:10, _sort: "-date"} }} />
        <SmartPatientQuery namespace="glucose" query={{ type: "Observation", query: { code: "2339-0", _count:10, _sort: "-date"} }} />
        
        <div className="row">
          <div className="col-md-12">
            <SmartPatient namespace="patient">
              <Resource>
                <PatientDetailView />
              </Resource>
            </SmartPatient>
          </div>  
        </div>
        <div className="patient-dashboard">
          <div className="row">
            <div className="col-md-6">
              <SmartPatient namespace="a1c">
                <ResourceArray emptyMessage="No previous A1C performed on this patient">
                  <A1CGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
            <div className="col-md-6">
              <SmartPatient namespace="ldl">
                <ResourceArray emptyMessage="No previous LDL performed on this patient">
                  <LDLGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <SmartPatient namespace="sodium">
                <ResourceArray emptyMessage="No previous Sodium performed on this patient">
                  <SodiumGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
            <div className="col-md-6">
              <SmartPatient namespace="glucose">
                <ResourceArray emptyMessage="No previous Glucose performed on this patient">
                  <GlucoseGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentPatientHome