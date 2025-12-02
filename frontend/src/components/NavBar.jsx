
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const token = localStorage.getItem('token');

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logo-link">Assign2</Link>
      </div>

    
      <div className="nav-links">
        {!token && (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
        {token && (
          <>
            <Link to="/employees" className="nav-link">Employees</Link>
            <button className="btn danger" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}