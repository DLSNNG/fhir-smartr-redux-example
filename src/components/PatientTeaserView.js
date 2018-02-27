import React from 'react'
import PropTypes from 'prop-types'

const PatientTeaserView = ({ resource }) => {
  console.log(resource);
  const patient = resource;
  const name = patient.name[0];
  const displayName = name.family + ', ' + name.given[0];
  const link = "#/patient/" + patient.id;
  return (
    <a href={link}><span className="patient-teaser-view">{displayName}</span></a>
  )
}

PatientTeaserView.propTypes = {
  resource: PropTypes.object
}

export default PatientTeaserView