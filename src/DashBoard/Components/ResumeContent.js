import React from "react";
import ResumeDataTable from "../../UserDesk/Resumes/ResumeDataTable";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "../Dashboard.css";

function ResumeContent() {
  return (
    <div>
      <div className="dashboard">
        <div className="glass">
          <Sidebar className="sidebar" />
          <div className="dashboard-content">
            <div>
              <Navbar />
            </div>
            <div style={{ height: "90vh" }}>
              <ResumeDataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeContent;
