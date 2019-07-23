import React, { Component } from "react";
import TextInput from "../layout/TextInput";
import { editTask } from "../../store/actions/taskActions";
import { connect } from "react-redux";

class EditTask extends Component {
  state = {
    title: this.props.taskTitle,
    desc: this.props.taskDesc,
    id: this.props.id
  };

  onSubmit = (e, task) => {
    if (
      task.title === this.props.taskTitle &&
      task.desc === this.props.taskDesc
    ) {
      this.props.handler();
    } else {
      e.preventDefault();
      this.props.editTask(task);
      this.props.handler();
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, desc } = this.state;
    return (
      <div>
        <form
          onSubmit={() => {
            this.onSubmit(this.state);
          }}
        >
          <TextInput
            label="Title"
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={this.onChange}
          />
          <hr />
          <TextInput
            label="Description"
            name="desc"
            type="text"
            placeholder="...."
            value={desc}
            onChange={this.onChange}
          />
          <button
            type="submit"
            value="Add Task"
            onClick={e => {
              this.onSubmit(e, this.state);
            }}
            className="btn btn-outline-success mb-3"
          >
            <i className="fas fa-check" />
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTask: task => dispatch(editTask(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditTask);
