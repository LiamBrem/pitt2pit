import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo">Pitt2PIT</span>
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-outline">Sign In</button>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar; 