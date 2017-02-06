import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';

import Logo from './Logo.js';
import LoginForm from './LoginForm.js';
import {
  resetLoginForm, submitLoginForm, updateText
} from '../actions/index.js';
import Dashboard from './Dashboard.js';

class App extends PureComponent {
  render() {
    if (this.props.sessionReducer.loggedIn) {
      return (
        <Grid fluid>
          <Dashboard />
        </Grid>
      );
    }
    else {
      return (
        <Grid fluid>
          <Logo logo={logo} />

          <br/>

          <LoginForm
            email={this.props.sessionReducer.email}
            emailValidationState={this.props.sessionReducer.emailValidationState}
            password={this.props.sessionReducer.password}
            passwordValidationState={this.props.sessionReducer.passwordValidationState}
            allowSubmission={this.props.sessionReducer.allowSubmission}
            handleReset={this.props.handleReset}
            handleLogin={this.props.handleLogin}
            handleChange={this.props.handleChange}
          />
        </Grid>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin(email, password) {
      dispatch(
        submitLoginForm(email, password)
      );
    },
    handleReset() {
      dispatch(
        resetLoginForm()
      );
    },
    handleChange(email, password) {
      dispatch(
        updateText(email, password)
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
