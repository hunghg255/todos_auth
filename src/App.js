import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/Layout";
import TodoList from "./containers/TodoList/TodoList";
import Login from "./containers/Auth/Login/Login";
import SignUp from "./containers/Auth/SignUp/SignUp";
import Logout from "./containers/Auth/Logout/Logout";
import VerifyEmail from "./containers/Auth/VerifyEmail/VerifyEmail";
import RecoverPassword from "./containers/Auth/RecoverPassword/RecoverPassword";
import Profile from "./containers/Auth/Profile/Profile";

function App({ loggedIn, emailVerified }) {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/log-out" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit-profile" component={Profile} />
        <Route exact path="/log-out" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/log-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        <Redirect to="/log-in" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
