import React from 'react'
import './header.css'
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header() {

const [showOption,setShowOption]=useState(false);



return (
    <div className='header1'>
    <div className='header d-flex justify-content-between shadow'  >
      <h5 className=' w-75'></h5>
      <h5 className="profile-menu">
        <span onClick={()=>setShowOption(!showOption)}> Admin <FaUser/></span>
        { showOption &&
        <div className='pf-ls'>
          <div className='fw-bole '><p>
            <NavLink className="text-decoration-none " to="/" >
            Logout <FaSignOutAlt/>
            </NavLink>
            </p></div>  
        </div>  
      }
      </h5>
    </div>
    </div>
  )
}

export default Header;
