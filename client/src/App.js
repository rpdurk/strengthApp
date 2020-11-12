import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Drawer from './pages/common/components/Drawer';
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
          path={['/dashboard', '/create', '/log', '/progress', '/account']}
        >
          <Drawer>
            <Switch>
              <Route exact path='/dashboard'>
                {viewer.token ? (
                  // <Redirect to='/dashboard' />
                  <Dashboard />
                ) : (
                  <Redirect to='/' />
                )}
              </Route>
              <Route path='/create' component={CreateWorkout} />
              <Route path='/log' component={LogWorkout} />
              <Route path='/progress' component={Progress} />
              <Route path='/account' component={Account} />
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
