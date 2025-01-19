import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  //   const reloadPage = () => {
  //       console.log("hi")
  //   window.location.reload();
  // };
  return (

    <nav className="navbar">
      <div className="navbar-container">
    
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
