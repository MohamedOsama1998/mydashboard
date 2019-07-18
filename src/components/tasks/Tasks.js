import React, { Component } from "react";
import PendingTask from "./PendingTask";
import CompletedTask from "./CompletedTask";
import InProgressTask from "./InProgressTask";

export default class Tasks extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h3>Pending</h3>
            <PendingTask
              title="FUCK ME"
              status="BEND"
              desc="This has to be bending"
            />
          </div>
          <div className="col-md-4">
            <h3>In progress</h3>
            <InProgressTask
              title="FUCK YOU"
              status="INPR"
              desc="This has to be In progress"
            />
          </div>
          <div className="col-md-4">
            <h3>Completed</h3>
            <CompletedTask
              title="FUCK ALL PEOPLE"
              status="COMP"
              desc="This has to be Completed"
            />
          </div>
        </div>
      </div>
    );
  }
}
