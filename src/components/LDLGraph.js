import React from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ReferenceLine } from 'recharts'

const LDLGraph = ({ data }) => {
  console.log(data);
  // map data to array for use with ReCharts
  const graphData = data.map((entry) => { 
    return { 
      date: moment(entry.resource.issued).format('MM/DD/YY'), 
      value: entry.resource.valueQuantity.value 
    } 
  }).reverse()
  
  return (
    <div className="dashboard-widget dark">
      <h2 className="dashboard-widget-title">LDL</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={600} height={300} data={graphData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" allowDuplicatedCategory={false} tick={{ fill: "#e1e1e1" }} />
          <YAxis domain={[0, dataMax => (dataMax + 20 > 180 ? dataMax + 20 : 180)]} tick={{ fill: "#e1e1e1" }} />
          <ReferenceLine y={160} stroke="#F50202" strokeWidth={2} strokeOpacity={1} strokeDasharray="3 3" label={{ value: "Very High Risk", fill: "#e1e1e1", position: "top"}} />
          <ReferenceLine y={130} stroke="#FFC31F" strokeWidth={2} strokeOpacity={1} strokeDasharray="3 3" label={{ value: "High Risk", fill: "#e1e1e1", position: "top"}} />
          <ReferenceLine y={100} stroke="#00ECFC" strokeWidth={2} strokeOpacity={1} strokeDasharray="3 3" label={{ value: "Above Optimal", fill: "#e1e1e1", position: "top"}} />
          <Line type="monotone" dataKey="value" stroke="#2791FF" strokeWidth={3} />
          <Tooltip labelStyle={{ color: "#333" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

LDLGraph.propTypes = {
  data: PropTypes.array.isRequired
}

export default LDLGraph