import React from 'react'
import { Smart, SmartQuery, Resource, ResourceList, ResourcePager } from 'fhir-smartr-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import PatientSearchForm from '../components/PatientSearchForm'
import PatientTeaserView from '../components/PatientTeaserView'

const PatientSearch = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
      
        <Smart namespace="testing">
          <PatientSearchForm />
        </Smart>
      
        <Smart namespace="testing">
          <ResourceList loadingComponent={LoadingSpinner} emptyMessage="Sorry it doesnt look like there are any items to display">
            <PatientTeaserView />
          </ResourceList>
          <ResourcePager />
        </Smart>
        
      </div>
    </div>
  </div>
)

export default PatientSearch