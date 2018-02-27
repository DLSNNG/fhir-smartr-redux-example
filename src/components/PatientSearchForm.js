import React from 'react'
import PropTypes from 'prop-types'

const PatientSearchForm = ({ onSubmit }) => {
    
  let input;
  console.log(onSubmit);
    
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          let query = { type: 'Patient', query: { name: input.value.trim(), _count: 25 } }
          onSubmit(query)
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

PatientSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default PatientSearchForm