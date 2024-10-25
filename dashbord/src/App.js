import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsWidget from "./components/StatsWidget";
import LeadTable from "./components/LeadTable";
import LeadReports from "./components/LeadReports";
import ReportGeneratingTools from "./components/ReportGeneratingTools";
import PriceRangeGraph from "./components/PriceRangeGraph";
import { FaChartLine, FaUsers, FaHandshake, FaPercent } from "react-icons/fa"; // Icons
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="stats">
          <StatsWidget
            title="Total Sales"
            value="UGX 30M"
            percentage="2.25"
            isPositive
            icon={<FaChartLine />}
          />
          <StatsWidget
            title="Total Customers"
            value="1,000"
            percentage="0"
            isPositive
            icon={<FaUsers />}
          />
          <StatsWidget
            title="Closed Deals"
            value="150"
            percentage="5.56"
            isPositive={false}
            icon={<FaHandshake />}
          />
          <StatsWidget
            title="Conversion Rate"
            value="15%"
            percentage="3.00"
            isPositive
            icon={<FaPercent />}
          />
        </div>
        <LeadTable />
        <div className="reports-section">
          <div className="lead-reports-container">
            <LeadReports />
          </div>
          <div className="report-generating-tools-container">
            <ReportGeneratingTools />
            <PriceRangeGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
