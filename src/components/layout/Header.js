import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark mb-3 py-0 bg-dark p-2">
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
            <ul className="navbar-nav mr-auto navbar-left">
              <li className="nav-item">
                {auth.uid ? (
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                ) : null}
              </li>
            </ul>
            {links}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Header);
