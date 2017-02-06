import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';

import Logo from './Logo.js';
import LoginForm from './LoginForm.js';
import {
  resetLoginForm, submitLoginForm, updateText
} from '../actions/index.js';

class App extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Logo logo={logo} />

        <br/>

        <LoginForm
          email={this.props.sessionReducer.email}
          password={this.props.sessionReducer.password}
          handleReset={this.props.handleReset}
          handleLogin={this.props.handleLogin}
          handleChange={this.props.handleChange}
        />
      </Grid>
    );
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
