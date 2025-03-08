import React from "react";
import "../Css/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({scrollToFeature}) => {
  const navigate=useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src= "/AI Interview Logo.jpg" alt="Logo" className="logo" />
        <h1 className="brand-name">MOCKMATE AI</h1>
      </div>
      <div className="navbar-center">
        <button className="nav-button" onClick={() => navigate('/about')}>
          <span className="icon">⚙️</span> About
        </button>
        <button className="nav-button">
          <span className="icon">💬</span> Docs
        </button>
        <button className="nav-button" onClick={(e) => {e.preventDefault(); 
          scrollToFeature(); }}>
          <span className="icon">📌</span> Features
        </button>
        <button className="nav-button">
          <span className="icon">📄</span> Contact
        </button>
      </div>
      <div className="navbar-right">
        <img src= "/Ellipse 2540.png" alt="User" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;