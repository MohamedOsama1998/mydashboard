import React, { Component } from "react";
import moment from "moment";
import { incTaskStatus } from "../../store/actions/taskActions";
import { connect } from "react-redux";

class PendingTask extends Component {
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
          <div className="card-header bg-secondary">
            added : {moment(date.toDate()).fromNow()}
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <button
              className="btn btn-outline-info mr-3 mb-3"
              onClick={toggleShowDesc}
            >
              <i className="fas fa-question" />
            </button>
            <button className="btn btn-outline-dark mb-3 mr-3">
              <i className="fas fa-pencil-alt" />
            </button>
            <button
              className="btn btn-outline-primary mb-3"
              onClick={() => {
                this.props.startTask(this.props.task);
              }}
            >
              <i className="fas fa-arrow-right" />
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
    startTask: task => dispatch(incTaskStatus(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PendingTask);
