import React, { Component } from "react";
import TextInputGroup from "../layout/TextInput";

class AddContact extends Component {
  state = {
    title: "",
    desc: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, desc, phone, errors } = this.state;

    // Check For Errors
    if (title === "" || desc === "" || phone === "") {
      const errorsCopy = errors;
      title === ""
        ? (errorsCopy.title = "Please enter title...")
        : (errorsCopy.title = "");
      desc === ""
        ? (errorsCopy.desc = "Please enter description to know what to do...")
        : (errorsCopy.desc = "");
      this.setState({
        errors: errorsCopy
      });
    } else {
      // ADD TASK
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, desc, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Task</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Title"
              name="title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={this.onChange}
              error={errors.title}
            />
            <TextInputGroup
              label="Description"
              name="desc"
              type="text"
              placeholder="...."
              value={desc}
              onChange={this.onChange}
              error={errors.desc}
            />
            <input
              type="submit"
              value="Add Task"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
