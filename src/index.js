import React from "react";
import ReactDom from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { firebaseApp } from "./firebase";
import './index.css'
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Anony from "./components/Anonymus";
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("user is signed in or up", user);
    browserHistory.push("/app");
  } else {
    console.log("user is not signed in");
    browserHistory.replace("/signin");
    localStorage.clear("name");
  }
});
ReactDom.render(
  <Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="anony" component={Anony} />
  </Router>,
  document.getElementById("root")
);
