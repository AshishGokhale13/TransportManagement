import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import './menu.css'
import { useRef } from 'react';
function Menu() {
  const [active,setActive]=useRef(false);
  const updateStatus=()=>
  {
    setActive(!active)
  }
  return (
        <>
        
        <div className='Menu py-2 '>
            <span className='h5 d-flex justify-content-between align-items-center px-2' onClick={updateStatus}>Home <FaHome/></span>
        </div>
        <div className={''+(active?'show':'hide') }>
           <div className='px-3'><h5>1</h5></div>
           <div className='px-3'><h5>1</h5></div>
           <div className='px-3'><h5>1</h5></div>
           <div className='px-3'><h5>1</h5></div>
        </div>
        </>
  )
}

export default Menu;