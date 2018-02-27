import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import * as moment from 'moment'

const A1CGraph = ({ query, isFetching, data, loadingComponent, emptyMessage, children }) => {
  
  // Still searching
  if(isFetching) {
    const LoadingComponent = loadingComponent;
    return loadingComponent ? <LoadingComponent /> : <div className="resource-list-loader">Loading...</div>
  }
  // No results
  const response = data;
  const total = ((response || {}).data || {}).total || false;
  const resources = ((response || {}).data || {}).entry;
  
  if(!total) {
    return false;
  }
  
  if(total === 0) { 
    return <div className="resource-list-empty-message">{emptyMessage ? emptyMessage : "No items to display"}</div>
  }
  // Has results
  const graphData = resources.map((entry) => {
    const date = moment(entry.resource.issued).format('MM/DD/YY');
    const value = entry.resource.valueQuantity.value;
    return { date: date, value: value }
  })
  
  // TODO refactor this to a standard wrapper
  // Note: use /patient/85f3ec35-d39c-4af4-8375-448c6c1a5a70 as example
  
  return (
    <LineChart width={600} height={300} data={graphData}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  )
}

A1CGraph.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  emptyMessage: PropTypes.string,
  loadingComponent: PropTypes.component
}

export default A1CGraph