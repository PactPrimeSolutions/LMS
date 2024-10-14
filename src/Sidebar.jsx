import React from 'react';
import { FaTimes, FaHome, FaUser, FaBook, FaCogs, FaKey } from 'react-icons/fa';
import { RiAdminFill } from "react-icons/ri";
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="main-menu">
        {/* Top Side */}
        <div className="top-side text-center py-4" style={{ backgroundImage: `url('/path/to/dotted.jpg')` }}>
          <div className="desktop-hide">
            <div className="toggle-btn" onClick={toggleSidebar}>
              <FaTimes />
            </div>
          </div>
          <a href="/">
            <img src="/path/to/logo.png" width="110px" alt="Logo" />
          </a>
          {/* <p className="text-orange">
            <mark>
              <i className="far fa-hand-point-right"></i>
              User Role
            </mark>
          </p> */}
        </div>

        {/* Menu Items */}
        <ul>
          <li>
            <a href="/dashboard">
              <FaHome /> Dashboard
            </a>
          </li>
          <li>
            <a href="/home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaUser /> Profile
            </a>
          </li>
          <li>
            <a href="/admin">
            <RiAdminFill /> Admin Panel
            </a>
          </li>
          <li>
            <a href="/courses">
              <FaBook /> Training Program
            </a>
          </li>
          <li>
            <a href="/employee">
              <FaBook /> Employee
            </a>
          </li>
          <li>
            <a href="/assesment">
              <FaBook /> Assesment
            </a>
          </li>
          <li>
            <a href="/quiz">
              <FaBook /> Quiz
            </a>
          </li>
          <li>
            <a href="/session">
              <FaBook /> Manage Session
            </a>
          </li>
          <p className="ml-3">Others</p>
          <li>
            <a href="/settings">
              <FaCogs /> Account Setting
            </a>
          </li>
          <li>
            <a href="/change-password">
              <FaKey /> Change Password
            </a>
          </li>
        </ul>
      </div>

      {/* Footer */}
      {/* <footer className="card-footer mt-5 pt-3 pb-5 px-2">
        <div className="col-12">
          <p className="small m-0">
            Read our <a href="#">Privacy</a> and <a href="#">Terms of Use</a>.
            <br />
            React LMS &copy; {new Date().getFullYear()}
            <br />
          </p>
          <a href="https://github.com/" className="btn btn-sm btn-dark mx-auto" target="_blank" rel="noopener noreferrer">
            ⭐️ Star This Project
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default Sidebar;
