import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Main from "./components/pages/Main";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Verification from "./components/auth/Verifciation";
import AddTask from "./components/tasks/AddTask";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/add/task" component={AddTask} />
            <Route exact path="/auth/verify" component={Verification} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
