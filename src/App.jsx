import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AdminPanel from './pages/AdminPanel';
import TrainingProgram from './pages/TrainingProgram';
import Employee from './pages/Employee';
import Assessment from './pages/Assessment';
import QuizPage from './pages/QuizPage'; // Renamed for better understanding
import ManagementSession from './pages/ManagementSession';
import AccountSettings from './pages/AccountSettings';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
// import CourseDetail from './pages/CourseDetail';  // Import the CourseDetail component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        {isLoggedIn ? (
          <>
            <Navbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
            <div className="content">
              <Sidebar isOpen={isSidebarOpen} />
              <main className={`main-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/training" element={<TrainingProgram />} />
                  <Route path="/employee" element={<Employee />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/quiz" element={<QuizPage />} /> {/* Updated */}
                  <Route path="/management" element={<ManagementSession />} />
                  <Route path="/account-settings" element={<AccountSettings />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                  
                  {/* Add the CourseDetail route here */}
                  {/* <Route path="/training/course/:id" element={<CourseDetail />} />   */}
                  
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </main>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
