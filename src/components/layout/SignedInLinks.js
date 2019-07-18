import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <i class="fas fa-sign-out-alt" /> Sign out
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <i class="fas fa-user" />
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
