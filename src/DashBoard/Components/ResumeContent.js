import React from "react";
import ResumeDataTable from "../../UserDesk/Resumes/ResumeDataTable";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "../Dashboard.css";
import { useState } from "react";

function ResumeContent() {
  const [searchHeader, setSearchHeader] = useState("Search Resume");

  return (
    <div>
      <div className="dashboard">
        <div className="glass">
          <Sidebar className="sidebar" />
          <div className="dashboard-content">
            <div>
              <Navbar navHeader={searchHeader} />
            </div>
            <div style={{ height: "90vh" }}>
              <ResumeDataTable setSearchHeader={setSearchHeader} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeContent;
