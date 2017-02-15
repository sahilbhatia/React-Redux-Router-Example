import React, { PureComponent } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

/**
  This component __uses bootstrap fluid grid__ to render a responsive  
  dashboard for the logged in user.

  __Notes:__  
    - This component is rendered ONLY for authenticated users

  __Example usage:__  
  `<Dashboard {...props} />`
*/

class Dashboard extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col lg={2}>
            <Panel>Panel 1</Panel>
          </Col>
          <Col lg={2}>
            <Panel>Panel 2</Panel>
          </Col>
          <Col lg={2}>
            <Panel>Panel 3</Panel>
          </Col>
          <Col lg={2}>
            <Panel>Panel 4</Panel>
          </Col>
          <Col lg={2}>
            <Panel>Panel 5</Panel>
          </Col>
          <Col lg={2}>
            <Panel>Panel 6</Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Dashboard;
