import React, { PureComponent } from 'react';
import {
  Grid, Row, Col, Image, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button
} from 'react-bootstrap';
import logo from './logo.svg';

class App extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col lg={2} lgOffset={5}>
            <Image src={logo} responsive />
          </Col>
        </Row>

        <br/>

        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col lgOffset={4} componentClass={ControlLabel} lg={1}>
              Email
            </Col>
            <Col lg={3}>
              <FormControl type="email" placeholder="e.g. someone@example.com" />
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
      </Grid>
    );
  }
}

export default App;
