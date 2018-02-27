import React from 'react'
import PropTypes from 'prop-types'

const PatientDetailView = ({ resource }) => {
  const patient = resource;
  console.log(resource);
  const name = patient.name[0];
  const displayName = name.family + ', ' + name.given[0];
  const phone = patient.telecom[0].value;
  const email = patient.telecom[1] ? patient.telecom[1].value : 'N/A';
  return (
    <div className="patient-detail-view">
      <h2 className="patient-name">{displayName}</h2>
      <h4><strong>Phone: </strong>{phone}</h4>
      <h4><strong>Email: </strong>{email}</h4>
      <hr />
    </div>
  )
}

PatientDetailView.propTypes = {
  resource: PropTypes.object
}

export default PatientDetailView