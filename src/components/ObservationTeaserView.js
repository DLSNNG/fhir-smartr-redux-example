import React from 'react'
import PropTypes from 'prop-types'

const ObservationTeaserView = ({ resource }) => {
  const observation = resource;
  const code = observation.code.coding[0].code;
  const name = observation.code.coding[0].display;
  const result = observation.valueQuantity.value;
  return (
     <span className="diagnostic-observation-name">{name} ({code}) = {result}</span>
  )
}

ObservationTeaserView.propTypes = {
  resource: PropTypes.object
}

export default ObservationTeaserView