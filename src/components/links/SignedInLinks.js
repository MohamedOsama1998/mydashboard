import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={props.signOut}>
            <i className="fas fa-sign-out-alt" /> Sign out
          </Link>
        </li>
        <li
          className="nav-item bg-danger ml-3"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "20px",
            fontSize: "1rem",
            textAlign: "center"
          }}
        >
          <NavLink to="/" className="nav-link">
            {props.userInitials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateTpPRops = state => {
  return {
    userInitials: state.firebase.profile.initials
  };
};

export default connect(
  mapStateTpPRops,
  mapDispatchToProps
)(SignedInLinks);
