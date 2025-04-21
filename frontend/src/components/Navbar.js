import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo">Pitt2PIT</span>
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-outline">Sign Up</button>
        <button className="btn btn-primary">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar; 