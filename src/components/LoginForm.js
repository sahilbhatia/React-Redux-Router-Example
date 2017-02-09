import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';

import * as actionCreators from '../actions/index.js';
import Logo from './Logo.js';
import logoSvg from '../images/logo.svg';

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

  render() {
    return (
      <Grid fluid>
        <Row>
          <Logo logo={logoSvg} />
        </Row>

        <Form horizontal onReset={this.handleReset} onSubmit={this.handleSubmission}>
          <FormGroup
            controlId="formHorizontalEmail"
            validationState={this.props.emailValidationState}
          >
            <Col lgOffset={4} componentClass={ControlLabel} lg={1}>
              Email
            </Col>
            <Col lg={3}>
              <FormControl
                type="email"
                placeholder="e.g. someone@example.com"
                autoFocus
                name="email"
                value={this.props.email}
                onChange={this.updateEmail}
              />
            </Col>
          </FormGroup>

          <FormGroup
            controlId="formHorizontalPassword"
            validationState={this.props.passwordValidationState}
          >
            <Col lgOffset={4} componentClass={ControlLabel} lg={1}>
              Password
            </Col>
            <Col lg={3}>
              <FormControl
                type="password"
                placeholder="e.g. password"
                name="password"
                value={this.props.password}
                onChange={this.updatePassword}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col lgOffset={5} lg={2}>
              <Button type="reset"> Cancel </Button>
              &nbsp;
              <Button
                type="submit"
                bsStyle="primary"
                disabled={!this.props.allowSubmission}
              > Sign in </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    );
  }

  updateEmail(event) {
    this.props.handleChange(event.target.value, this.props.password);
  }

  updatePassword(event) {
    this.props.handleChange(this.props.email, event.target.value);
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
