import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import rootReducer from "./store/reducers/rootReducer";
import AddTask from "./components/tasks/AddTask";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/add/task" component={AddTask} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
