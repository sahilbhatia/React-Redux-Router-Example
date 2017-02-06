import React, { PureComponent } from 'react';
import {
  Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button
} from 'react-bootstrap';

class LoginForm extends PureComponent {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col lgOffset={4} componentClass={ControlLabel} lg={1}>
            Email
          </Col>
          <Col lg={3}>
            <FormControl type="email" placeholder="e.g. someone@example.com" autoFocus />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col lgOffset={4} componentClass={ControlLabel} lg={1}>
            Password
          </Col>
          <Col lg={3}>
            <FormControl type="password" placeholder="e.g. password" />
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
}

export default LoginForm;
