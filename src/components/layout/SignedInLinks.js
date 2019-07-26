import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div className="nav navbar-nav navbar-right">
      <div className="nav-item navbar-text ml-3">
        <span className="font-weight-light">Signed in as </span>
        <div className="btn-group">
          <Link to="#">
            {props.profile.firstName} {props.profile.lastName}
            <i className="fas fa-sort-down" />
          </Link>
        </div>
      </div>
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
    profile: state.firebase.profile
  };
};

export default connect(
  mapStateTpPRops,
  mapDispatchToProps
)(SignedInLinks);
