import React from "react";
import "./StatsWidget.css";

const StatsWidget = ({ title, value, percentage, isPositive, icon }) => {
    return (
        <div className="stats-widget">
            <div className="icon-container">{icon}</div>
            <h3 className="stats-title">{title}</h3>
            <p className="stats-value">{value}</p>
            <span className={`percentage ${isPositive ? "positive" : "negative"}`}>
                {isPositive ? "▲" : "▼"} {percentage}%
            </span>
        </div>
    );
};

export default StatsWidget;
