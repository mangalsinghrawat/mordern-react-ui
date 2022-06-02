import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { SidebarData } from "./SidebarData";
import "./MainNav.css";

function MainNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <Link to="" className="menu-bars">
          <MenuIcon onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}></nav>
      <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <CloseIcon />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MainNav;
