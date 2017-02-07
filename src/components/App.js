import React, { PureComponent } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class App extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col lg={1}>
            <Link to="/">Home</Link>
          </Col>
          <Col lg={1}>
            <Link to="/login">Login</Link>
          </Col>
          <Col lg={1}>
            <Link to="/dashboard">Dashboard</Link>
          </Col>
        </Row>

        <br />

        {this.props.children}
      </Grid>
    )
  }
}

export default App
