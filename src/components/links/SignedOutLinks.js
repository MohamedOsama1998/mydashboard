import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">
              <i className="fas fa-user" />
              Sign-in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">
              <i className="fas fa-user-plus" />
              Sign-up
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
