import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../../images/logo.png'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
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
  const refreshPage =()=>{
    window.location('#').reload(true);
  }
  return (
      // <div className={sidebar ? "nav-menu active" : "nav-menu"}>
      //     {/* logo */}
      //     <div className="logo">
      //         <img src={Logo} alt="" />
      // </div>
      <div className="sidebar">
          {/* logo */}
      <div className="logo">
        <Link to='/dashboard' >
              <img className='logoImg' src={Logo} alt=""  />
        </Link>
      </div> 
  
      {/* Menu */}

      <div className='menu'>
        <div className="menuItem"  >
          <div>
            <HomeOutlinedIcon />
          </div>
          <Link to='/dashboard'>Dashboard</Link >
        </div>
        <div className="menuItem">
          <div>
            <PersonOutlineOutlinedIcon />
          </div>
          <Link onClick={refreshPage} to='/users-info'> Users Info</Link >
        </div>
         <div className="menuItem"  >
          <div style={{paddingRight: '4px'}} >
            <InsertDriveFileOutlinedIcon fontSize='small' />
          </div>
          <Link onClick={refreshPage} to='/resume-data'>Resumes</Link >
        </div>
        
        {/* <div className="menuItem">
          <Button id='btn-logout' variant='outlined' ><Link to='/login'>Logout</Link></Button>
          </div> */}
      </div>
  </div>
  )
}

export default Sidebar