import React from 'react'

const GlucosePlaceholder = () => {
  
  return (
    <div className="dashboard-widget dark">
      <h2 className="dashboard-widget-title">Glucose</h2>
      <div className="placeholder a1c-placeholder">
        <i className="fa fa-user-times"></i>
        <p>No recent Glucose results found</p>
      </div>
    </div>
  )
}

export default GlucosePlaceholder