import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleSidebar, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="toggle-sidebar" >
          ☰
        </button>
        <h1>PactPrime LMS Portal</h1>
      </div>
      <div className="navbar-right">
        <Link to="/account-settings">Account Settings</Link>
        <Link to="/change-password">Change Password</Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;