import React from "react";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h1>Pending tasks</h1>
        </div>
        <div className="col-md-4">
          <h1>In progress tasks</h1>
        </div>
        <div className="col-md-4">
          <h1>Completed tasks</h1>
        </div>
      </div>
    </div>
  );
}
