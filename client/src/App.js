import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/common/components/Navbar";
import SignIn from "./pages/common/components/SignIn";
import Dashboard from "./pages/common/components/Dashboard";
import CreateWorkout from "./pages/common/components/CreateWorkout";
import LogWorkout from "./pages/common/components/LogWorkout";
import Progress from "./pages/common/components/Progress";
import Account from "./pages/common/components/Account";

import { WrappedSignUp, WrappedSignIn } from "./pages/Viewer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route>
        <Route path="/create">
          <Navbar />
          <CreateWorkout />
        </Route>
        <Route path="/log">
          <Navbar />
          <LogWorkout />
        </Route>
        <Route path="/progress">
          <Navbar />
          <Progress />
        </Route>
        <Route path="/account">
          <Navbar />
          <Account />
        </Route>
      </Switch>
      {/* <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} /> */}
    </Router>
  );
}

export default App;
