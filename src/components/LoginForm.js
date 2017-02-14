import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock
} from 'react-bootstrap';

import * as actionCreators from '../actions/index.js';
import Loader from './Loader.js';

/**
  This component is responsible for showing the login form.
*/

class LoginForm extends PureComponent {
  constructor(props) {
    super(props)

    this.handleReset = this.props.handleReset.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  state = {
    errors: {
      email: null,
      password: null
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <Grid fluid>
          <Form horizontal onReset={this.handleReset} onSubmit={this.handleSubmission}>
            <Row>
              <Col lgOffset={4} lg={3}>
                <FormGroup
                  controlId="formHorizontalEmail"
                  validationState={this.props.emailValidationState}
                >
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    type="email"
                    placeholder="e.g. someone@example.com"
                    autoFocus
                    name="email"
                    value={this.props.email}
                    onChange={this.updateEmail}
                  />
                  <HelpBlock>{ this.state.errors.email }</HelpBlock>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col lgOffset={4} lg={3}>
                <FormGroup
                  controlId="formHorizontalPassword"
                  validationState={this.props.passwordValidationState}
                >
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type="password"
                    placeholder="e.g. password"
                    name="password"
                    value={this.props.password}
                    onChange={this.updatePassword}
                  />
                  <HelpBlock>{ this.state.errors.password }</HelpBlock>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col lgOffset={4} lg={3}>
                <FormGroup>
                  <Button
                    type="submit"
                    bsStyle="primary"
                    block
                    disabled={!this.props.allowSubmission}
                  > Sign in </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Grid>
      );
    }
  }

  updateEmail(event) {
    let trimmedEmail = event.target.value.trim();
    let emailRegex = /\w+@\w+\.\w+/m;
    let errorMsg = null;
    let updatedErrors = null;

    if (trimmedEmail === '') {
      errorMsg = "Email can't be left blank";
    } else if ( !emailRegex.test(trimmedEmail) ) {
      errorMsg = "Email format is invalid!";
    } else {
      errorMsg = null;
    }

    updatedErrors = this.state.errors;
    updatedErrors.email = errorMsg;

    this.setState(updatedErrors);
    this.props.handleChange({ email: event.target.value });
  }

  updatePassword(event) {
    let password = event.target.value;
    let errorMsg = null;
    let updatedErrors = null;

    if (password === '') {
      errorMsg = "Password can't be left blank";
    } else if (password.length < 8) {
      errorMsg = "Password must be at least 8 characters long!";
    } else {
      errorMsg = null;
    }

    updatedErrors = this.state.errors;
    updatedErrors.password = errorMsg;

    this.setState(updatedErrors);
    this.props.handleChange({ password: event.target.value });
  }

  handleSubmission(event) {
    event.preventDefault();

    this.props.handleLogin(this.props.email, this.props.password);
  }

  componentWillReceiveProps(nextProps) {
    let alreadyLoggedIn = this.props.loggedIn;
    let router = this.props.router;

    if (!alreadyLoggedIn && nextProps.loggedIn) {
      router.push('dashboard');
    }
  }
}

// "ownProps" argument contains router's props (provided by react router)
function mapStateToProps(state, ownProps) {
  return state.sessionReducer;
}

export default connect(
  mapStateToProps,
  {
    handleLogin: actionCreators.submitLoginFormAsync,
    handleReset: actionCreators.resetLoginForm,
    handleChange: actionCreators.updateText
  }
)(LoginForm);
