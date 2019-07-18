import React, { Component } from "react";

export default class Task extends Component {
  state = {
    status: "",
    showDesc: false
  };

  render() {
    const { title, desc, status } = this.props;

    const getStatusClass = status => {
      switch (status) {
        case "COMP":
          return "card-header bg-success";
        case "INPR":
          return "card-header bg-primary";
        case "BEND":
          return "card-header bg-dark";
        default:
          return "";
      }
    };

    const toggleShowDesc = () => {
      this.setState({
        showDesc: !this.state.showDesc
      });
    };

    return (
      <div>
        <div className="card text-center">
          <div className={getStatusClass(status)} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <button
              className="btn btn-outline-info mr-3 mb-3"
              onClick={toggleShowDesc}
            >
              <i class="fas fa-question-circle" />
            </button>
            <button className="btn btn-outline-dark mb-3 mr-3">
              <i className="fas fa-pencil-alt" />
            </button>
            <button className="btn btn-outline-primary mb-3">
              <i className="fas fa-arrow-circle-right" />
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
