import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Lead conversion Rate", value: 60 },
  { name: "Sales Trend", value: 30 },
  { name: "Recent Lead", value: 10 }
];

// Color codes to match the sample
const COLORS = ["#6a5acd", "#d3d3d3", "#b19cd9"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize="12px"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const LeadReports = () => {
  return (
    <div className="lead-reports-wrapper">
      <h4 className="lead-reports-title">lead Reports</h4>
      <div className="chart-legend-container">
        {/* Pie Chart */}
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cursor="pointer"
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>
        </PieChart>

        {/* Color Plates with Labels */}
        <div className="legend-plates">
          {data.map((entry, index) => (
            <div key={`legend-item-${index}`} className="legend-item">
              <div
                className="color-box"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="legend-text">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadReports;
