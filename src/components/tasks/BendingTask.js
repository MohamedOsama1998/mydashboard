import React, { Component } from "react";

export default class Task extends Component {
  state = {
    showDesc: false
  };

  render() {
    const { title, desc } = this.props;

    const toggleShowDesc = () => {
      this.setState({
        showDesc: !this.state.showDesc
      });
    };

    return (
      <div>
        <div className="card text-center">
          <div className="card-header bg-secondary" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <button
              className="btn btn-outline-info mr-3 mb-3"
              onClick={toggleShowDesc}
            >
              <i className="far fa-question-circle" />
              <i className="fas fa-question-circle" />
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
