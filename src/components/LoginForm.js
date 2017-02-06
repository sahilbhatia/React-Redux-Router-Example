import React, { PureComponent } from 'react';
import {
  Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button
} from 'react-bootstrap';

class LoginForm extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.props.handleLogin.bind(this);
    this.handleReset = this.props.handleReset.bind(this);
  }

  render() {
    return (
      <Form horizontal onReset={this.handleReset} onSubmit={this.handleLogin}>
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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

  handleChange(event) {
    this.props.handleChange(event.target.name, event.target.value)
  }
}

export default LoginForm;
