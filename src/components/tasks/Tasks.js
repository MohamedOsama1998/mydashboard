import React from "react";
import PendingTask from "./PendingTask";
import CompletedTask from "./CompletedTask";
import InProgressTask from "./InProgressTask";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Spinner from "../layout/Spinner";

const Tasks = ({ tasks }) => {
  if (tasks) {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4">
            <h3>Pending</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === 0) {
                  return <PendingTask task={task} key={task.id} />;
                } else {
                  return null;
                }
              })}
          </div>
          <div className="col-lg-4">
            <h3>In progress</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === 1) {
                  return <InProgressTask task={task} key={task.id} />;
                } else {
                  return null;
                }
              })}
          </div>
          <div className="col-lg-4">
            <h3>Completed</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === 2) {
                  return <CompletedTask task={task} key={task.id} />;
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.firestore.ordered.tasks
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "tasks",
      orderBy: ["date", "desc"]
    }
  ])
)(Tasks);
