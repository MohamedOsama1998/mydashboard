import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import SignedOutLinks from "./SignedOutLinks";

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
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </li>
            </ul>
            <SignedOutLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}
