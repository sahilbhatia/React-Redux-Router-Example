import React, { PureComponent } from 'react';
import {
  Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button
} from 'react-bootstrap';

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
      <Form horizontal onReset={this.handleReset} onSubmit={this.handleSubmission}>
        <FormGroup controlId="formHorizontalEmail">
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

        <FormGroup controlId="formHorizontalPassword">
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
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col lgOffset={5} lg={2}>
            <Button type="reset"> Cancel </Button>
            &nbsp;
            <Button type="submit" bsStyle="primary"> Sign in </Button>
          </Col>
        </FormGroup>
      </Form>
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
}

export default LoginForm;
