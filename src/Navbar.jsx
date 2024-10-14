import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBook, faUser, faCog, faSignOutAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // Implement search logic here
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="top-navbar" className="py-1">
      <div className="container">
        <div className="nav-wrapper d-flex justify-content-between align-items-center">
          {/* Sidebar toggle button */}
          <div className="toggle-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          {/* Search form */}
          <form className="form-header d-flex" onSubmit={handleSearchSubmit}>
            <input
              id="primary-search"
              className="form-control rounded-end-0"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="btn btn-dark rounded-start-0" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {/* User dropdown */}
          <div className="dropdown">
            <div className="avatar border border-2" type="button" onClick={toggleDropdown}>
              <img src="https://via.placeholder.com/40" alt="User" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu show" style={{ minWidth: '14rem' }}>
                <div className="d-flex flex-column align-items-center">
                  <div className="avatar avatar-md border">
                    <img src="https://via.placeholder.com/40" alt="User" />
                  </div>
                  <p className="small text-muted text-center mb-0">Last login: 2024-09-20</p>
                </div>
                <hr />
                <a className="dropdown-item" href="#courses">
                  <FontAwesomeIcon icon={faBook} className="me-2" />
                  Training Program
                </a>
                <a className="dropdown-item" href="#admin">
                  <FontAwesomeIcon icon={faUserTie} className="me-2" />
                  Admin Panel
                </a>
                <a className="dropdown-item" href="#profile">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Profile
                </a>
                <a className="dropdown-item" href="#settings">
                  <FontAwesomeIcon icon={faCog} className="me-2" />
                  Setting
                </a>
                <hr />
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Signout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
