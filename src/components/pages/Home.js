import React, { Component } from "react";
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NoPermission from "./NoPermission";

class Home extends Component {
  state = {
    toggleAddView: false
  };

  onToggleAddView = () => {
    this.setState({
      toggleAddView: !this.state.toggleAddView
    });
  };

  render() {
    if (!this.props.auth.uid) return <NoPermission />;
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h2>Welcome back {this.props.firstName}!</h2>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-primary" to="/add/task">
              <i className="fas fa-plus" /> Add task
            </Link>
          </div>
        </div>
        <div>{this.state.toggleAddView ? <AddTask /> : null}</div>
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
