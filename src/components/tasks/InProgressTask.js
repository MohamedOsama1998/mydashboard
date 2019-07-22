import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { incTaskStatus, decTaskStatus } from "../../store/actions/taskActions";

class InProgressTask extends Component {
  state = {
    showDesc: false
  };

  render() {
    const { title, desc, date } = this.props.task;

    const toggleShowDesc = () => {
      this.setState({
        showDesc: !this.state.showDesc
      });
    };

    return (
      <div>
        <div className="card text-center mb-4">
          <div className="card-header bg-primary">
            added {moment(date.toDate()).fromNow()}
          </div>
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
              onClick={toggleShowDesc}
            >
              <i className="fas fa-question" />
            </button>
            <button className="btn btn-outline-dark mr-3 mb-3">
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
            <div className="card-footer text-muted">{desc}</div>
          ) : null}
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
