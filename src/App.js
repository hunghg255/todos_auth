import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/Layout";
import Home from "./containers/Home/Home";
import TodoList from "./containers/TodoList/TodoList";
import Login from "./containers/Auth/Login/Login";
import SignUp from "./containers/Auth/SignUp/SignUp";
import Logout from './containers/Auth/Logout/Logout';

function App({ loggedIn }) {
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/log-out" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/log-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Redirect to="/log-in" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null
});

export default connect(mapStateToProps)(App);
