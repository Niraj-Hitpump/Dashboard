import React from "react";
import { FaEdit, FaTrashAlt, FaFilePdf, FaFileCsv } from "react-icons/fa"; // Importing icons from Font Awesome
import "./ReportGeneratingTools.css";

const ReportGeneratingTools = () => {
  return (
    <div className="report-tools-wrapper">
      <h3 className="report-tools-title">Report Generating Tools:</h3>

      <div className="tool">
        <span className="tool-name">Task A</span>
        <div className="action-buttons">
          <button className="tool-button">
            <FaEdit className="icon" /> edit
          </button>
          <button className="tool-button">
            <FaTrashAlt className="icon" /> delete
          </button>
          <button className="tool-button">
            <FaFilePdf className="icon" /> PDF
          </button>
          <button className="tool-button">
            <FaFileCsv className="icon" /> CSV
          </button>
        </div>
      </div>

      <div className="tool">
        <span className="tool-name">Task B</span>
        <div className="action-buttons">
          <button className="tool-button">
            <FaEdit className="icon" /> edit
          </button>
          <button className="tool-button">
            <FaTrashAlt className="icon" /> delete
          </button>
          <button className="tool-button">
            <FaFilePdf className="icon" /> PDF
          </button>
          <button className="tool-button">
            <FaFileCsv className="icon" /> CSV
          </button>
        </div>
      </div>

      <div className="tool">
        <span className="tool-name">Task C</span>
        <div className="action-buttons">
          <button className="tool-button">
            <FaEdit className="icon" /> edit
          </button>
          <button className="tool-button">
            <FaTrashAlt className="icon" /> delete
          </button>
          <button className="tool-button">
            <FaFilePdf className="icon" /> PDF
          </button>
          <button className="tool-button">
            <FaFileCsv className="icon" /> CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportGeneratingTools;
