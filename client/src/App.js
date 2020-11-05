import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drawer from "./pages/common/components/Drawer";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import CreateWorkout from "./pages/CreateWorkout";
import LogWorkout from "./pages/LogWorkout";
import Progress from "./pages/Progress";
import Account from "./pages/Account";

import { WrappedSignUp, WrappedSignIn } from "./pages/Viewer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Drawer />
          <Dashboard />
        </Route>
        <Route path="/create">
          <Drawer />
          <CreateWorkout />
        </Route>
        <Route path="/log">
          <Drawer />
          <LogWorkout />
        </Route>
        <Route path="/progress">
          <Drawer />
          <Progress />
        </Route>
        <Route path="/account">
          <Drawer />
          <Account />
        </Route>
      </Switch>
      {/* <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} /> */}
    </Router>
  );
}

export default App;
