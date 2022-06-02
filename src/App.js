import "./App.css";
import React from "react";
import Register from "../src/pages/RegisterPage/Register.js";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Home from "./pages/HomePage/Home";
import Dashboard from "./DashBoard/Dashboard";
import MainNav from "./DashBoard/Components/MainNavbar/MainNav";
import SampleAddUser from "./pages/Users/SampleAddUser";
import UserInfo from "./DashBoard/User-info/UserInfo";
import AddUsers from "./DashBoard/Components/AddUsers/AddUsers";
import UsersApi from "./Data/UsersApi";
import UserHomePage from "./UserDesk/UserHomePage";
import UtilityTable from "./Data/UtilityTable";
import Employees from "./pages/Users/Employees";

function App() {
  return (
    <div className="app">
      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users-info" element={<UserInfo />} />
        <Route path="/sidebar" element={<MainNav />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/sample" element={<SampleAddUser />} />
        <Route path="/api" element={<UsersApi />} />
        <Route path="/user/home" element={<UserHomePage />} />
        <Route path="/table" element={<UtilityTable />} />
        <Route path="/employee" element={<Employees />} />

        {/* {["/", "/login"].map((path, index) => (
          <Route path={path} component={<Login />} key={index} />
        ))} */}
      </Routes>
    </div>
    // <div className="app">
    //   <Dashboard />
    // </div>
    // <div className="app">
    //   <SearchFilter />
    // </div>
  );
}

export default App;
