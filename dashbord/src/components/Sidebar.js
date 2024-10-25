import React from "react";
import { FaTachometerAlt, FaChartLine, FaUsers, FaProductHunt, FaFileAlt, FaTasks, FaCog, FaSignOutAlt } from "react-icons/fa"; // Importing icons
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="branding">
        <h2>EzyMetrics</h2> {/* Branding or Logo */}
      </div>
      <div className="menu">
        <ul>
          <li><FaTachometerAlt className="icon" /> Dashboard</li>
          <li><FaChartLine className="icon" /> Analytics</li>
          <li><FaUsers className="icon" /> Leads</li>
          <li><FaProductHunt className="icon" /> Products</li>
          <li><FaFileAlt className="icon" /> Reports</li>
          <li><FaTasks className="icon" /> Lead Pipeline</li>
          <li><FaCog className="icon" /> Settings</li>
          <li><FaSignOutAlt className="icon" /> Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
