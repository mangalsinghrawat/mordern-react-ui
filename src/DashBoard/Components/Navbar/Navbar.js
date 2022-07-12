// import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 30px;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: #3b82f6;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: white;
  .btn-container {
    position: relative;
  }
  .btn {
    height: 38px;
    border-radius: 5px;
    justify-content: center;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 1rem;
    position: relative;
    background: #647acb;

    color: #f0f0f0;
    font-weight: bold;
    border: transparent;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    color: #3b82f6;
    width: 100%;
    background: #dbeafe;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: 0.25rem;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: #3b82f6;
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
    z-index: 1;
  }
  .logo-text {
    display: none;
    color: #1976d2;
    margin: 0;
    margin-left: -10px;
    font-size: 29px;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
  @media (max-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  // const [sidebar, setSidebar] = useState(true);
  // const [state, setState] = useState(true);

  // const toggleSidebar = (e) => {
  //   setState((e.isSidebarOpen = !state.isSidebarOpen));
  // };
  // const toggle = () => {
  //   // return toggleSidebar();
  // };
  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <Wrapper>
      <div className="nav-center">
        {/* <button type="button" className="toggle-btn" onClick={toggle}>
          <MenuIcon />
        </button> */}
        <div>
          <Link to="/dashboard">
            <h3 className="logo-text">
              BitByBit
              <span
                style={{
                  fontSize: "17px",
                  color: "#1976d2",
                  marginLeft: "0px",
                }}
              >
                Solutions
              </span>
            </h3>
          </Link>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <AccountCircleOutlinedIcon />
            {/* {user?.name} */}
            Admin
            <ArrowDropDownOutlinedIcon />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              //   onClick={() => dispatch(clearStore("Logging out..."))}
            >
              <Link to="/login">Logout</Link>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
