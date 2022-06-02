import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import StatsContainer from "./Components/Stats/StatsContainer";
import "./Dashboard.css";

function Dashboard() {
  // let result = FetchedData();

  // console.log(result);

  return (
    <div className="dashboard">
      <div className="glass">
        <Sidebar className="sidebar" />
        <div className="dashboard-content">
          <div>
            <Navbar className="navbar" />
          </div>
          <div className="divOne">
            <StatsContainer />
          </div>
          <div className="divTwo"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
