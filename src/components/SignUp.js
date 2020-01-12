import React, { Component } from "react";
import { Link } from "react-router";
import { firebaseApp } from "../firebase";

export default class SignUp extends Component {
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
  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log("email", error);
        this.setState({ error: error });
      });
    localStorage.setItem("name", this.state.name);
  }
  render() {
    return (
      <div>
        <h2 className="green fwb mb3 ml4">Sign Up</h2>
        <div className="w5 ml4">
          <div className="form-group tc">
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
              type="text"
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
              onClick={this.signUp.bind(this)}
            >
              Sign Up
            </button>
            <div>{this.state.error.message}</div>
          </div>
          <div>
            <Link to={"/signin"}>Sign in instead?</Link>
          </div>
        </div>
      </div>
    );
  }
}
