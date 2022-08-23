import React from "react";
import Chartbar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointvalues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointvalues);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
