import React from "react";
import { Link } from "react-router";
import { firebaseApp } from "../firebase";

export default class Anony extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  Anony() {
    firebaseApp.auth().signInAnonymously();
    localStorage.setItem("name", "Stranger");
  }
  render() {
    return (
      <div className="tc mt3 bg-yellow">
        <h2>Do You Really Wanna Be Anonymous ?</h2>
        <button
          className="btn btn-danger mt2 ml3"
          type="button"
          onClick={this.Anony}
        >
          Yes !
        </button>
        <Link to={"/signin"}>
          <button className="btn btn-success mt2 black ml3" type="button">
            No !
          </button>
        </Link>
      </div>
    );
  }
}
