import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/login">Login</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/register">Register</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
