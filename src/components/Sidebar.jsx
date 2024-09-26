import React from 'react';
import { Link } from 'react-router-dom';
import pawLogo from '../assets/pawlogo.png';
import { FaHome, FaRegFileAlt, FaDog, FaExclamationTriangle } from 'react-icons/fa'; 
import './Sidebar.css'; 

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
          <Link to="/report-problem"> {/* Assuming you'll create a route for Report Problem */}
            <FaExclamationTriangle size={24} />
            <p>Report Problem</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
