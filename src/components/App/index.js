import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Group from '../Group'
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  sidebar: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    padding: "auto",
  }
});

const App = (props) =>
  <Router basename={process.env.PUBLIC_URL}>
    <div className="app">
      <Navigation />

      <div className="container">
        <div className="main">
          <Paper className={props.classes.root} elevation={5}>
            <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route exact path={routes.LOGIN} component={() => <SignInPage />} />
            <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
            <Route exact path={routes.GROUP} component={() => <Group />} />
          </Paper>
        </div>
        <div className="sidebar">
          <Paper className={props.classes.sidebar} elevation={5}>
            <h4>Sidebar</h4>
          </Paper>
        </div>
        <div className="clearfix"></div>
      </div>

    </div>
  </Router>

export default withAuthentication(withStyles(styles)(App));