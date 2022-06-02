import React from 'react'
import './Sidebar.css'
import Logo from '../../../images/logo.png'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Sidebar = () => {
  //  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };
  const refreshPage =()=>{
    window.location('/user-info').reload(true);
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
              <img src={Logo} alt="" />
      </div> 
  
      {/* Menu */}

      <div className='menu'>
        <div className="menuItem">
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
         {/* <div className="menuItem">
          <div>
            <PersonAddAltIcon />
          </div>
          <Link to='/addusers'>Add
            Users</Link >
        </div> */}
        
        {/* <div className="menuItem">
          <Button id='btn-logout' variant='outlined' ><Link to='/login'>Logout</Link></Button>
          </div> */}
      </div>
  </div>
  )
}

export default Sidebar