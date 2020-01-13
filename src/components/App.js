import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import Todos from "./Todos";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: new Date(),
      anony: "",
      todos: [
        { id: 1, title: "Go Fishing!", body: "Go Fishing with dad" },
        { id: 2, title: "Fry the fish!", body: "fry the fish in the oil, baby" }
      ],
      text: "",
      body: ""
    };
  }
  componentDidMount() {
    const tame = localStorage.getItem("name");
    if (tame !== null) {
      const name = tame.toLocaleUpperCase();
      this.setState({ name: name });
    } else {
      this.setState({ anony: "No name provided" });
    }
let todos =localStorage.getItem("todo")
this.setState({todos})
  }
  signOut() {
    console.log("app");
    firebaseApp.auth().signOut();
  }
  deleteThis = id => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id;
    });
    this.setState({
      todos
    });
localStorage.setItem("todo",this.state.todos)
  };
  onChange = event => {
    let text = event.target.value;
    this.setState({ text });
  };
  onSubmit = event => {
    event.preventDefault();
    const todos = [
      ...this.state.todos,
      {
        id: Math.random(),
        title: this.state.text,
        body: this.state.body
      }
    ];
    this.setState({ todos, text: "", body: "" });
localStorage.setItem("todo",this.state.todos)
  };
  toogleDarkMode = () => {
    if (this.refs.check.checked) {
      this.refs.toogle.style.background = "#343A40";
      this.refs.toogle.style.color = "white";
    } else {
      this.refs.toogle.style.background = "white";
      this.refs.toogle.style.color = "black";
    }
  };
  handleChange(event) {
    this.setState({ body: event.target.value });
  }
  render() {
    return (
      <div className="tc">
        {""}
        <button
          className="btn btn-danger flt"
          onClick={this.signOut.bind(this)}
        >
          Sign Out
        </button>
        <h3>
          Hello! <strong className="blue">{this.state.name}</strong>{" "}
          Welcome to the App
        </h3>
        <br />
        <p>{this.state.anony}</p>
        <div>
          <div className="container">
            <h3>Add A Task</h3>
            <div className="form-group card">
              <form onSubmit={this.onSubmit}>
                <label>Title:</label>
                <input
                  required
                  value={this.state.text}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Add Todos..."
                />
                <label>Description:</label>
                <textarea
                  required
                  value={this.state.body}
                  className="form-control"
                  placeholder="Description..."
                  onChange={this.handleChange.bind(this)}
                ></textarea>
                <input type="submit" className="btn btn-success btn-lg" />
              </form>
            </div>
          </div>
          <h1>Todos...</h1>
          <Todos deleteThis={this.deleteThis} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}
