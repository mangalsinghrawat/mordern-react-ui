import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../../images/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AddNewResume from "../../../UserDesk/Resumes/AddNewResume";
import AddIcon from "@mui/icons-material/Add";
import PopupComp from "../../../components/PopupComp";
import { userData } from "../../../utils/sessionData";
import { ENUM_USERTYPE } from "../../../utils/Enums";

const Sidebar = () => {
  // const [isActive, setIsActive] = useState(true)

  // const linkStyle = ((isActive) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //   }
  // })
  //  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };
  const refreshPage = () => {
    window.location("#").reload(true);
  };

  const UserType = ENUM_USERTYPE[userData.UserType];
  return (
    // <div className={sidebar ? "nav-menu active" : "nav-menu"}>
    //     {/* logo */}
    //     <div className="logo">
    //         <img src={Logo} alt="" />
    // </div>
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <Link to="/dashboard">
          <img className="logoImg" src={Logo} alt="" />
        </Link>
      </div>

      {/* Menu */}

      <div>
        <ul className="menu ">
          <li className="menuItem ">
            <Link className="linkText" to="/dashboard">
              <HomeOutlinedIcon />
              Dashboard
            </Link>
          </li>
          {UserType === "Admin" ? (
            <li className="menuItem">
              <Link onClick={refreshPage} to="/users-info">
                <PersonOutlineOutlinedIcon />
                Users Info
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className="menuItem">
            <Link onClick={refreshPage} to="/resume-data">
              <InsertDriveFileOutlinedIcon fontSize="small" />
              Search Resumes
            </Link>
          </li>
          <li className="menuItem">
            <Link onClick={refreshPage} to="/add-resume">
              <AddIcon fontSize="small" />
              Add New Resume
            </Link>
          </li>
        </ul>
        {/* <li className="menuItem">
            <Link onClick={() => setOpenPopup(true)} to="/add-resume">
              <AddIcon fontSize="small" />
              Add New
            </Link>
          </li>
        </ul>
        <PopupComp
          title="Candidate Resume Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <AddNewResume setOpenPopup={setOpenPopup} />
        </PopupComp> */}
      </div>
    </div>
  );
};

export default Sidebar;
