import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/layout/Layout";
import Home from "./containers/Home/Home";
import TodoList from "./containers/TodoList/TodoList";
import Login  from './containers/Auth/Login/Login';
import SignUp  from './containers/Auth/SignUp/SignUp';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo-list" component={TodoList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
