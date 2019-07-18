import React, { Component } from "react";
import Tasks from "../tasks/Tasks";
import AddTask from "../tasks/AddTask";

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
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h2>Hello USER!</h2>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={this.onToggleAddView}>
              <i className="fas fa-plus" /> Add task
            </button>
          </div>
        </div>
        <div>{this.state.toggleAddView ? <AddTask /> : null}</div>
        <hr />
        <Tasks />
      </div>
    );
  }
}

export default Home;
