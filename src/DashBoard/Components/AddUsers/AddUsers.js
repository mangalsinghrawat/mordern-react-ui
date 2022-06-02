import React from "react";
import AddEmployee from "../../../pages/Users/AddEmployee";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddUsers = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="glass">
          <Sidebar className="sidebar" />
          <div className="dashboard-content">
            <div>
              <Navbar />
            </div>
            <div>
              <AddEmployee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
