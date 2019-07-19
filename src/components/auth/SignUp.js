import React, { Component } from "react";
import TextInput from "../layout/TextInput";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    confEmail: "",
    password: "",
    confPassword: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      confEmail: "",
      password: "",
      confPassword: ""
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      confEmail,
      password,
      confPassword,
      errors
    } = this.state;

    // ERROR CHECKING

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confEmail === "" ||
      confPassword === "" ||
      email !== confEmail ||
      password !== confPassword
    ) {
      const errorsCopy = errors;
      firstName === ""
        ? (errorsCopy.firstName = "Please enter your first name...")
        : (errorsCopy.firstName = "");
      lastName === ""
        ? (errorsCopy.lastName = "Please enter your last name...")
        : (errorsCopy.lastName = "");
      password === ""
        ? (errorsCopy.password = "Please enter a new password...")
        : (errorsCopy.password = "");
      confPassword === ""
        ? (errorsCopy.confPassword = "Please confirm your new password...")
        : password !== confPassword
        ? (errorsCopy.confPassword = "Your password must match...")
        : (errorsCopy.confPassword = "");
      email === ""
        ? (errorsCopy.email = "Please enter your E-maIl...")
        : (errorsCopy.email = "");
      confEmail === ""
        ? (errorsCopy.confEmail = "Please confirm your E-mail...")
        : email !== confEmail
        ? (errorsCopy.confEmail = "Your E-mail must match...")
        : (errorsCopy.confEmail = "");
      this.setState({
        errors: errorsCopy
      });
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password
      };

      this.props.signUp(newUser);
    }
  };

  render() {
    if (this.props.auth.uid) return <Redirect to="/home" />;
    const {
      email,
      password,
      errors,
      confEmail,
      confPassword,
      firstName,
      lastName
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-4 mt-1 text-center pt-3 pb-4 text-dark">
                <i className="fas fa-lock" /> Sign Up
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextInput
                    label="First name"
                    name="firstName"
                    value={firstName}
                    placeholder="First name"
                    type="text"
                    onChange={this.onChange}
                    error={errors.firstName}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Last name"
                    name="lastName"
                    value={lastName}
                    placeholder="Last name"
                    type="text"
                    onChange={this.onChange}
                    error={errors.lastName}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Your E-mail"
                    name="email"
                    value={email}
                    placeholder="example@domain.com"
                    type="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Confirm E-mail"
                    name="confEmail"
                    value={confEmail}
                    placeholder="example@domain.com"
                    type="email"
                    onChange={this.onChange}
                    error={errors.confEmail}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="New Password"
                    name="password"
                    value={password}
                    placeholder="******"
                    type="password"
                    onChange={this.onChange}
                    error={errors.password}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Confirm Password"
                    name="confPassword"
                    value={confPassword}
                    placeholder="******"
                    type="password"
                    onChange={this.onChange}
                    error={errors.confPassword}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-dark btn-block">
                    {" "}
                    Sign up{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
