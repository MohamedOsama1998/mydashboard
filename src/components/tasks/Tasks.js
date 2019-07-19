import React from "react";
import BendingTask from "./PendingTask";
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
          <div className="col-md-4">
            <h3>Pending</h3>
            {tasks &&
              tasks.map(task => {
                if (task.status === "BEND") {
                  return (
                    <BendingTask
                      key={task.id}
                      title={task.title}
                      desc={task.desc}
                    />
                  );
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
                  return (
                    <InProgressTask
                      key={task.id}
                      title={task.title}
                      desc={task.desc}
                    />
                  );
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
                  return (
                    <CompletedTask
                      key={task.id}
                      title={task.title}
                      desc={task.desc}
                    />
                  );
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
      collection: "tasks"
    }
  ])
)(Tasks);
