// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark px-4">
    <span className="navbar-brand">Quiz App</span>
    <div>
      <NavLink className="btn btn-outline-light me-2" to="/">Quiz</NavLink>
      <NavLink className="btn btn-outline-light me-2" to="/review">Quiz Review</NavLink>
    </div>
  </nav>
);

export default Navbar;
