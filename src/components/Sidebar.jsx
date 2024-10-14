import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/admin">Admin Panel</Link>
          </li>
          <li>
            <Link to="/training">Training Program</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
          <li>
            <Link to="/assessment">Assessment</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/management">Management Session</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
