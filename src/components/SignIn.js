import React, { Component } from "react";
import { Link } from "react-router";
import { firebaseApp } from "../firebase";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      error: {
        message: ""
      }
    };
  }

  signIn() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log("email", error);
        this.setState({ error: error });
      });
    localStorage.setItem("name", this.state.name);
  }
loggedin(){
  var user = firebaseApp.auth().currentUser;
  user.updateProfile({
    displayName: `${this.state.name}`
  }).then(function() {
    //
  }).catch(function(error) {
    // An error happened.
  });
}
  render() {
   
    return (
      <div>
        <h2 className="green fwb mb3 ml4">Sign In</h2>
        <div className="w5  ml4">
          <div className="form-group tc ">
            <i className="fw1 f7 ml0">*Not Required </i>Name:{" "}
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              onChange={event => this.setState({ name: event.target.value })}
            />
            Email:{" "}
            <input
              className="form-control"
              type="email"
              placeholder="email"
              onChange={event => this.setState({ email: event.target.value })}
            />
            Password:{" "}
            <input
              className="form-control"
              type="password"
              placeholder="password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
            <button
              className="btn btn-primary mt2"
              type="button"
              onClick={this.signIn.bind(this)}
            >
              Sign In
            </button>
            <div>{this.state.error.message}</div>
          </div>
          <div>
            <Link to={"/signup"}>Sign up instead?</Link>
          </div>
          <div>
            <Link to={"/anony"}>Sign In with Anonymously</Link>
          </div>
        </div>
      </div>
    );
  }
}
