import React, { Component } from "react";
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NoPermission from "./NoPermission";

class Home extends Component {
  render() {
    if (!this.props.auth.uid) return <NoPermission />;
    if (!this.props.auth.emailVerified) return <Redirect to="/auth/verify" />;
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h2>Welcome back {this.props.firstName}!</h2>
          </div>
          <div className="col-md-2">
            <AddTask />
          </div>
        </div>
        <hr />
        <Tasks />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    firstName: state.firebase.profile.firstName
  };
};

export default connect(mapStateToProps)(Home);
