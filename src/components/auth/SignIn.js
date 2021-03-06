import React, { Component } from "react";
import TextInput from "../layout/TextInput";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: ""
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, errors } = this.state;

    // ERROR CHECKING

    if (email === "" || password === "") {
      const errorsCopy = errors;
      email === ""
        ? (errorsCopy.email = "Email is required...")
        : (errorsCopy.email = "");
      password === ""
        ? (errorsCopy.password = "Password is required...")
        : (errorsCopy.password = "");
      this.setState({
        errors: errorsCopy
      });
    } else {
      const userInfo = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.signIn(userInfo);
      this.props.toggleLoding();
    }
  };

  render() {
    if (this.props.auth.uid) return <Redirect to="/home" />;
    const { email, password, errors } = this.state;
    const { authErr, isLoading } = this.props;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-4 mt-1 text-center pt-3 pb-4 text-dark">
                <i className="fas fa-lock" /> Sign in
              </h1>
              <form onSubmit={this.onSubmit}>
                {authErr ? (
                  <p className="alert alert-danger">{authErr}</p>
                ) : null}
                <div className="form-group">
                  <TextInput
                    label="Email"
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
                    label="Password"
                    name="password"
                    value={password}
                    placeholder="******"
                    type="password"
                    onChange={this.onChange}
                    error={errors.password}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Sign in"
                    )}
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
    authErr: state.auth.signInErr,
    auth: state.firebase.auth,
    isLoading: state.auth.buttonLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: crednts => dispatch(signIn(crednts)),
    toggleLoding: () => dispatch({ type: "TOGGLE_LOADING" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
