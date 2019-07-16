import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark mb-3 py-0 bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            MyDashboard
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  <i className="fas fa-user" />
                  Sign-in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <i className="fas fa-user-plus" />
                  Sign-up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
