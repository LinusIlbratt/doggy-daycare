import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegFileAlt, FaDog, FaExclamationTriangle } from 'react-icons/fa'; 
import './Sidebar.css'; 

function Sidebar() {

  useEffect(() => {
    // Function to handle dynamic viewport height
    function handleResize() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Set initial height and listen for resize events
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div className="sidebar" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>      
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
