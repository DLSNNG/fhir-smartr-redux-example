import React from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts'

const A1CGraph = ({ data }) => {
  
  // map data to array for use with ReCharts
  const graphData = data.map((entry) => { 
    return { 
      date: moment(entry.resource.issued).format('MM/DD/YY'), 
      value: entry.resource.valueQuantity.value 
    } 
  }).reverse()
  
  return (
    <div className="dashboard-widget dark">
      <h2 className="dashboard-widget-title">A1C</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData}>
          <CartesianGrid stroke="#e1e1e1" strokeOpacity={.5}/>
          <XAxis dataKey="date" allowDuplicatedCategory={false} tick={{ fill: "#e1e1e1" }} />
          <YAxis domain={[0, dataMax => (dataMax + 2 > 8 ? dataMax + 2 : 8)]} tick={{ fill: "#e1e1e1" }} />
          <ReferenceLine y={6} stroke="#FF3D3D" strokeWidth={2} strokeOpacity={1} strokeDasharray="3 3" label={{ value: "Diabetic", fill: "#e1e1e1", position: "top"}} />
          <ReferenceLine y={4} stroke="#FFC31F" strokeWidth={2} strokeOpacity={1} strokeDasharray="3 3" label={{ value: "Pre-Diabetic", fill: "#e1e1e1", position: "top"}} />
          <Line type="monotone" dataKey="value" stroke="#2791FF" strokeWidth={3} />
          <Tooltip labelStyle={{ color: "#333" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

A1CGraph.propTypes = {
  data: PropTypes.array.isRequired
}

export default A1CGraph