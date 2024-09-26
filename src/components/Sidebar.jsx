import React from 'react';
import { Link } from 'react-router-dom';
import pawLogo from '../assets/pawlogo.png';
import { FaHome, FaRegFileAlt, FaDog, FaExclamationTriangle } from 'react-icons/fa'; // Add FaHome for Dashboard
import './Sidebar.css'; // Import the CSS file for sidebar styles

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={pawLogo} alt="Paw logo" />
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <FaHome size={24} />
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link to="/catalog">
            <FaDog size={24} />
            <p>View Dogs</p>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaRegFileAlt size={24} />
            <p>Register Dog</p>
          </Link>
        </li>
        <li>            
                <FaExclamationTriangle size={24} />
                <p>Report problem</p>            
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
