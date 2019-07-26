import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TextInput from "../layout/TextInput";
import NoPermission from "../pages/NoPermission";
import { createTask } from "../../store/actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    title: "",
    desc: "",
    errors: {},
    isOpen: false
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, desc, phone, errors } = this.state;
    const { profile } = this.props;

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
      const newTask = {
        title,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        desc,
        date: new Date(),
        status: 0,
        state: "Added",
        userID: this.props.auth.uid
      };
      this.props.createTask(newTask);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    if (!this.props.auth.uid || !this.props.auth.emailVerified)
      return <NoPermission />;

    const { title, desc, errors } = this.state;
    return (
      <div>
        <Button variant="primary" onClick={this.toggleModal}>
          <i className="fas fa-plus" /> New task
        </Button>

        <Modal
          show={this.state.isOpen}
          onHide={this.toggleModal}
          centered={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>New task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextInput
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                />
              </div>
              <div className="form-group">
                <TextInput
                  label="Description"
                  name="desc"
                  type="text"
                  placeholder="...."
                  value={desc}
                  onChange={this.onChange}
                  error={errors.desc}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <input
              type="submit"
              value="Add Task"
              className="btn btn-dark btn-block"
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
