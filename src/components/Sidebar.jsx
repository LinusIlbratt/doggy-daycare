import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegFileAlt, FaDog, FaExclamationTriangle } from 'react-icons/fa'; 
import './Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar" style={{ height: '100vh' }}>      
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <FaHome className='home-icon' />
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link to="/catalog">
            <FaDog className='dog-icon' />
            <p>View Dogs</p>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaRegFileAlt className='register-icon' />
            <p>Register Dog</p>
          </Link>
        </li>
      </ul>
      <div className="report-icon-container">
        <a href="https://github.com/LinusIlbratt/doggy-daycare/issues" target="_blank" rel="noopener noreferrer">
          <FaExclamationTriangle className='report-icon' />
          <p>Report Bug</p>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
