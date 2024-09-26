import React from 'react';
import { Link } from 'react-router-dom';
import pawLogo from '../assets/pawlogo.png';
import { FaHome, FaRegFileAlt, FaDog, FaExclamationTriangle } from 'react-icons/fa'; 
import './Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar">      
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
        <li>
          <Link to="/report-problem"> 
            <FaExclamationTriangle className='report-icon' />
            <p>Report Bug</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
