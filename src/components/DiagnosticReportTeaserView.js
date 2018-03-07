import React from 'react'
import PropTypes from 'prop-types'

const DiagnosticReportTeaserView = ({ resource }) => {
  const report = resource;
  const code = report.code.coding[0].code;
  const name = report.code.coding[0].display;
  return (
     <span className="diagnostic-report-name">{name} ({code}) {}</span>
  )
}

DiagnosticReportTeaserView.propTypes = {
  resource: PropTypes.object
}

export default DiagnosticReportTeaserView