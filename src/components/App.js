import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';

import Logo from './Logo.js';
import LoginForm from './LoginForm.js';
import {
  resetLoginForm, submitLoginFormAsync, updateText
} from '../actions/index.js';
import Dashboard from './Dashboard.js';

class App extends PureComponent {
  render() {
    if (this.props.loggedIn) {
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
            email={this.props.email}
            emailValidationState={this.props.emailValidationState}
            password={this.props.password}
            passwordValidationState={this.props.passwordValidationState}
            allowSubmission={this.props.allowSubmission}
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
  console.log(state.sessionReducer);
  return state.sessionReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin(email, password) {
      dispatch(
        submitLoginFormAsync(email, password)
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
