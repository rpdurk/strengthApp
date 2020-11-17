import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Drawer from './pages/Drawer';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import CreateWorkout from './pages/CreateWorkout';
import LogWorkout from './pages/LogWorkout';
import Progress from './pages/Progress';
import Account from './pages/Account';
import theme from './utils/Theme';
import { useSelector } from 'react-redux';

function App() {
  let viewer = useSelector((state) => state.viewer);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path='/' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route
          path={['/dashboard', '/create', '/log']}
        >
          <Drawer>
            <Switch>
              <Route exact path='/dashboard'>
                {viewer.token ? <Dashboard /> : <Redirect to='/' />}
              </Route>
              <Route exact path='/create'>
                {viewer.token ? <CreateWorkout /> : <Redirect to='/' />}
              </Route>
              <Route exact path='/log'>
                {viewer.token ? <LogWorkout /> : <Redirect to='/' />}
              </Route>
              {/* <Route exact path='/progress'>
                {viewer.token ? <Progress /> : <Redirect to='/' />}
              </Route>
              <Route exact path='/account'>
                {viewer.token ? <Account /> : <Redirect to='/' />}
              </Route> */}
            </Switch>
          </Drawer>
        </Route>
        {/* Manny's routes below */}
        {/* <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
