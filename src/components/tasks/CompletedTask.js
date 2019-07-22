import React, { Component } from "react";
import moment from "moment";
import { deleteTask, decTaskStatus } from "../../store/actions/taskActions";
import { connect } from "react-redux";

class CompletedTask extends Component {
  state = {
    showDesc: false
  };

  render() {
    const {
      title,
      desc,
      date,
      id,
      authorFirstName,
      authorLastName
    } = this.props.task;

    const toggleShowDesc = () => {
      this.setState({
        showDesc: !this.state.showDesc
      });
    };

    return (
      <div>
        <div className="card text-center mb-4">
          <div className="card-header bg-success">
            {/* <button className="btn-xs btn-danger float-left btn-circle">
              <i className="fas fa-times" />
            </button> */}
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <button
              className="btn btn-outline-primary mr-3 mb-3"
              onClick={() => this.props.undoTask(this.props.task)}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <button
              className="btn btn-outline-info mr-3 mb-3"
              onClick={toggleShowDesc}
            >
              <i className="fas fa-question-circle" />
            </button>
            <button
              className="btn btn-outline-danger mb-3"
              onClick={() => this.props.delTask(id)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          {this.state.showDesc ? (
            <div className="card-text mb-3">{desc}</div>
          ) : null}
          <div className="card-footer text-muted">
            added by {authorFirstName + " " + authorLastName}
            <br />
            {moment(date.toDate()).fromNow()}{" "}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delTask: id => dispatch(deleteTask(id)),
    undoTask: task => dispatch(decTaskStatus(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CompletedTask);
