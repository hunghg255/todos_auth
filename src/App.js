import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/layout/Layout";
import Home from "./containers/Home/Home";
import TodoList from "./containers/TodoList/TodoList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo-list" component={TodoList} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
