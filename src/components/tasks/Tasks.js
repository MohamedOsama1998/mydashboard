import React, { Component } from "react";
import BendingTask from "./BendingTask";
import CompletedTask from "./CompletedTask";
import InProgressTask from "./InProgressTask";
import { connect } from "react-redux";

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h3>Pending</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === "BEND") {
                  return <BendingTask title={task.title} desc={task.desc} />;
                } else {
                  return null;
                }
              })}
          </div>
          <div className="col-md-4">
            <h3>In progress</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === "INPR") {
                  return <InProgressTask title={task.title} desc={task.desc} />;
                } else {
                  return null;
                }
              })}
          </div>
          <div className="col-md-4">
            <h3>Completed</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === "COMP") {
                  return <CompletedTask title={task.title} desc={task.desc} />;
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks
  };
};

export default connect(mapStateToProps)(Tasks);
