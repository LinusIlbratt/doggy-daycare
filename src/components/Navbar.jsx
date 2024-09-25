import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Stänger menyn när en länk klickas
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1>Doggy Daycare</h1>
            </div>
            <button className='hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/catalog" onClick={closeMenu}>Catalog</Link></li>
                <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

