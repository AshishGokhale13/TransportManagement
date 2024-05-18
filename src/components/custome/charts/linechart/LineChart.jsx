import React from 'react'
import { Chart, Line, Point, Tooltip, Legend } from 'bizcharts';
import { useState } from 'react';



const targets = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 0 },
    { month: 'Mar', value: 0 },
    { month: 'Apr', value: 0 },
    { month: 'May', value: 0 },
    { month: 'Jun', value: 0 },
    { month: 'Jul', value: 0 },
    { month: 'Aug', value: 0 },
    { month: 'Sep', value: 0 },
    { month: 'Oct', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dec', value: 0 },
  ]

export const mapdata=(data)=>
{
    data.map(e=>console.log(targets[e.month-1].value=e.count));
    return targets;
}





function LineChart({data}) {
   
    
      return (
        <Chart height={200} autoFit data={data}>
          <Line position="month*value" />
          <Point position="month*value" />
          <Tooltip showCrosshairs />
          <Legend />
        </Chart>
      );
  
}

export default LineChart
