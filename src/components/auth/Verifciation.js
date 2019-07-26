import React, { Component } from "react";
import { verifyEmail, signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
import NoPermission from "../pages/NoPermission";
import Spinner from "react-bootstrap/Spinner";

class Verifciation extends Component {
  state = {
    toggleVerifyButton: false
  };

  onVerify = () => {
    console.log("CLICKED VERIFY");
    this.setState({
      toggleVerifyButton: true
    });

    this.props.verifyEmail();
  };

  onCancel = () => {
    this.props.signOut();
    this.props.history.push("/");
  };

  render() {
    if (this.props.auth.emailVerified || !this.props.auth.uid) {
      return <NoPermission />;
    }
    return (
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="card-text mb-3">
                <p>Please verify your ownership of {this.props.auth.email}.</p>
              </div>
              <button
                className="btn btn-dark btn-block"
                disabled={this.state.toggleVerifyButton}
                onClick={this.onVerify}
              >
                {this.state.toggleVerifyButton ? (
                  <Spinner
                    size="sm"
                    as="span"
                    animation="border"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Send verifcation Code"
                )}
              </button>
              <button
                className="btn btn-dark btn-block"
                onClick={this.onCancel}
              >
                cancel
              </button>
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
    verifyEmail: () => dispatch(verifyEmail()),
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verifciation);
