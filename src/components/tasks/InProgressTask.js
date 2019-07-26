import React, { Component } from "react";
import moment from "moment";
import EditTask from "./EditTask";

import { connect } from "react-redux";
import { incTaskStatus, decTaskStatus } from "../../store/actions/taskActions";

class InProgressTask extends Component {
  state = {
    showDesc: false,
    isEditing: false
  };

  toggleShowDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  render() {
    const {
      title,
      desc,
      date,
      state,
      id,
      authorFirstName,
      authorLastName
    } = this.props.task;

    return (
      <div>
        <div className="card text-center mb-4">
          <div className="card-header bg-primary" />
          {this.state.isEditing ? (
            <EditTask
              taskTitle={title}
              taskDesc={desc}
              id={id}
              handler={this.toggleEditing}
            />
          ) : (
            <div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <hr />
                <button
                  className="btn btn-outline-primary mr-3 mb-3"
                  onClick={() => {
                    this.props.undoTask(this.props.task);
                  }}
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  className="btn btn-outline-info mr-3 mb-3"
                  onClick={this.toggleShowDesc}
                >
                  <i className="fas fa-question" />
                </button>
                <button
                  className="btn btn-outline-dark mr-3 mb-3"
                  onClick={this.toggleEditing}
                >
                  <i className="fas fa-pencil-alt" />
                </button>
                <button
                  className="btn btn-outline-success mr-3 mb-3"
                  onClick={() => {
                    this.props.completeTask(this.props.task);
                  }}
                >
                  <i className="fas fa-check" />
                </button>
              </div>
              {this.state.showDesc ? (
                <div className="card-text mb-3">{desc}</div>
              ) : null}
              <div className="card-footer text-muted">
                {state} by {authorFirstName + " " + authorLastName}
                <br />
                {moment(date.toDate()).fromNow()}{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    completeTask: task => dispatch(incTaskStatus(task)),
    undoTask: task => dispatch(decTaskStatus(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InProgressTask);
