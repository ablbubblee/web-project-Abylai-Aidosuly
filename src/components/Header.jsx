// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/assets/logo.png" // Replace with the path to your logo image
            alt="Your Blog Logo"
            className="logo-img"
            style={{ width: "100px" }}
          />
          <span className="brand-name">Daily Bugle</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/liked" className="nav-link">
                Liked
              </Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
