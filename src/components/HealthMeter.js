import React from 'react'
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'

const HealthMeter = ({ smart }) => {
  
  // TODO: finish radial bar chart
  
  const colors = {
    a1c: 'steelblue',
    ldl: 'orange'
  }
  
  const graphData = Object.keys((smart || {})).map((key) => {
    console.log(key);
    const name = smart[key].isFetching ? 'Loading...' : smart[key].data.data.entry[0].resource.code.text;
    const value = smart[key].isFetching ? 0 : smart[key].data.data.entry[0].resource.valueQuantity.value;
    const fill = colors[key];
    return { name: name, value: value, fill: fill }
  })
  
  return (
    <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={graphData} startAngle={180} endAngle={0}>
      <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='value' />
      <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
      <Tooltip />
    </RadialBarChart>
  )
}

HealthMeter.propTypes = {
  smart: PropTypes.object.isRequired
}

export default HealthMeter