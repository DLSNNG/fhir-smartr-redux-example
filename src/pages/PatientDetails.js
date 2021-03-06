import React, { Component } from 'react';
import * as moment from 'moment'
import { Smart, SmartMulti, SmartQuery, Resource, ResourceList, ResourceArray, ResourcePager } from 'fhir-smartr-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import PatientSearchForm from '../components/PatientSearchForm'
import PatientDetailView from '../components/PatientDetailView'
import ObservationTeaserView from '../components/ObservationTeaserView'
import A1CGraph from '../components/A1CGraph'
import A1CPlaceholder from '../components/A1CPlaceholder'
import LDLGraph from '../components/LDLGraph'
import LDLPlaceholder from '../components/LDLPlaceholder'
import SodiumGraph from '../components/SodiumGraph'
import SodiumPlaceholder from '../components/SodiumPlaceholder'
import GlucoseGraph from '../components/GlucoseGraph'
import GlucosePlaceholder from '../components/GlucosePlaceholder'

class PatientDetails extends Component {

  render() {
    // grab id
    const id = this.props.match.params.id;
    // set map function for A1C Chart
    const a1CMapFunction = (entry) => { 
      return { 
        date: moment(entry.resource.issued).format('MM/DD/YY'), 
        value: entry.resource.valueQuantity.value 
      } 
    }
    
    return (
      <div className="container">
        <SmartQuery namespace="Patient" query={{ type: "Patient", id: id }} />
        <SmartQuery namespace="a1c" query={{ type: "Observation", query: { patient: id, code: "4548-4", _count:10, _sort: "-date"} }} />
        <SmartQuery namespace="ldl" query={{ type: "Observation", query: { patient: id, code: "18262-6", _count:10, _sort: "-date"} }} />
        <SmartQuery namespace="sodium" query={{ type: "Observation", query: { patient: id, code: "2947-0", _count:10, _sort: "-date"} }} />
        <SmartQuery namespace="glucose" query={{ type: "Observation", query: { patient: id, code: "2339-0", _count:10, _sort: "-date"} }} />
        
        <div className="row">
          <div className="col-md-12">
            <Smart namespace="Patient">
              <Resource>
                <PatientDetailView />
              </Resource>
            </Smart>
          </div>
        </div>
        <div className="patient-dashboard">
          <div className="row">
            <div className="col-md-6">
              <Smart namespace="a1c">
                <ResourceArray placeholder={A1CPlaceholder}>
                  <A1CGraph />
                </ResourceArray>
              </Smart>
            </div>
            <div className="col-md-6">
              <Smart namespace="ldl">
                <ResourceArray placeholder={LDLPlaceholder}>
                  <LDLGraph />
                </ResourceArray>
              </Smart>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Smart namespace="sodium">
                <ResourceArray placeholder={SodiumPlaceholder}>
                  <SodiumGraph />
                </ResourceArray>
              </Smart>
            </div>
            <div className="col-md-6">
              <Smart namespace="glucose">
                <ResourceArray placeholder={GlucosePlaceholder}>
                  <GlucoseGraph />
                </ResourceArray>
              </Smart>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientDetails