import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Main = props => {
  if (props.auth.uid) {
    return (
      <div>
        <h2>Hello {props.firstName}!</h2>
        <p>
          Go to <Link to="/home">Home</Link> to start the journey!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcome to My Dashboard!</h2>
        <p>
          Please <Link to="/signup">Sign up</Link> or{" "}
          <Link to="/signin">Sign in</Link> to start using this web app,
        </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    firstName: state.firebase.profile.firstName
  };
};

export default connect(mapStateToProps)(Main);
