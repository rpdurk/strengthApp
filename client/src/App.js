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
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Drawer} />
      <Route path="/create" component={Drawer} />
      <Route path="/log" component={Drawer} />
      <Route path="/progress" component={Drawer} />
      <Route path="/account" component={Drawer} />
      {/* Manny's routes below */}
      {/* <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} /> */}
    </Router>
  );
}

export default App;
