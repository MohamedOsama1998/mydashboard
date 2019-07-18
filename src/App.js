import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
