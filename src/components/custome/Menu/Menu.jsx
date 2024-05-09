import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import './menu.css';

import { NavLink } from 'react-router-dom';

function Menu({ content }) {
  const [submenuActive, setSubmenuActive] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuActive(!submenuActive);
  };

  return (
    <div className="area">
      <div className='Menu py-2' onClick={toggleSubmenu}>
        <span className='h5 d-flex justify-content-between align-items-center px-2'>{content.name} {content.icon}</span>
      </div>
      {content.submenu && submenuActive && (
        <div className='subMenus dj'>
          {content.submenu.map((data, index) => (
            <div className='px-2' key={index}>
              <h6>
                <NavLink to={`/admin${data.link}`} className='text-white text-decoration-none d-flex justify-content-between align-items-center'>
                  {data.name} {data.icon}
                </NavLink>
              </h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
