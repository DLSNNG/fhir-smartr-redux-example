import React from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'

const PatientDetailView = ({ resource }) => {
  const patient = resource;
  console.log(resource);
  const name = patient.name[0];
  const gender = patient.gender.toUpperCase();
  const dob = moment(patient.birthDate);
  const age = moment().diff(dob, 'years');
  const born = dob.format('MM/DD/YYYY');
  const displayName = name.family + ', ' + name.given[0];
  const phone = patient.telecom[0].value;
  const email = patient.telecom[1] ? patient.telecom[1].value : 'N/A';
  return (
    <div className="patient-detail-view">
      <div className="pull-left">
        <h2 className="patient-name">{displayName}</h2>
        <h4><strong>Sex: </strong>{gender}</h4>
        <h4><strong>Age: </strong>{age}</h4>
      </div>
      <div className="pull-right">
        <h4><strong>DOB: </strong>{born}</h4>
        <h4><strong>Phone: </strong>{phone}</h4>
        <h4><strong>Email: </strong>{email}</h4>
      </div>
    </div>
  )
}

PatientDetailView.propTypes = {
  resource: PropTypes.object
}

export default PatientDetailView