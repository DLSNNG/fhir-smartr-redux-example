import React, { Component } from 'react';
import { Smart, SmartQuery, Resource, ResourceList, ResourcePager } from 'fhir-smartr-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import PatientSearchForm from '../components/PatientSearchForm'
import PatientDetailView from '../components/PatientDetailView'
import ObservationTeaserView from '../components/ObservationTeaserView'
import A1CGraph from '../components/A1CGraph'

class PatientDetails extends Component {

  render() {
    const id = this.props.match.params.id;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SmartQuery namespace="testing2" query={{ type: "Patient", id: id }} />
            <Smart namespace="testing2">
              <Resource>
                <PatientDetailView />
              </Resource>
            </Smart>
            <SmartQuery namespace="testing3" query={{ type: "Observation", query: { patient: id, code: "4548-4", _count:50, _sort: "-date"} }} />
            <Smart namespace="testing3">
              <A1CGraph />
            </Smart>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientDetails