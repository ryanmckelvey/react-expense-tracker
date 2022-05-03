import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const values = props.dataPoints.map(data => data.value)
    const dataMax = Math.max(...values)
  return (
    <div className="chart">
      {props.dataPoints.map((d) => (
        <ChartBar key={d.id} value={d.value} maxValue={dataMax} label={d.label} />
      ))}
    </div>
  );
};

export default Chart;
