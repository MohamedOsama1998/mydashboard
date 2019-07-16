import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
