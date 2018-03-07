import React, { Component } from 'react';
import { SmartQuery, SmartPatient, SmartPatientQuery, Resource, ResourceList, ResourceArray } from 'fhir-smartr-redux'
import PatientDetailView from '../components/PatientDetailView'
import A1CGraph from '../components/A1CGraph'
import A1CPlaceholder from '../components/A1CPlaceholder'
import LDLGraph from '../components/LDLGraph'
import LDLPlaceholder from '../components/LDLPlaceholder'
import SodiumGraph from '../components/SodiumGraph'
import SodiumPlaceholder from '../components/SodiumPlaceholder'
import GlucoseGraph from '../components/GlucoseGraph'
import GlucosePlaceholder from '../components/GlucosePlaceholder'

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
                <ResourceArray placeholder={A1CPlaceholder}>
                  <A1CGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
            <div className="col-md-6">
              <SmartPatient namespace="ldl">
                <ResourceArray placeholder={LDLPlaceholder}>
                  <LDLGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <SmartPatient namespace="sodium">
                <ResourceArray placeholder={SodiumPlaceholder}>
                  <SodiumGraph />
                </ResourceArray>
              </SmartPatient>
            </div>
            <div className="col-md-6">
              <SmartPatient namespace="glucose">
                <ResourceArray placeholder={GlucosePlaceholder}>
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