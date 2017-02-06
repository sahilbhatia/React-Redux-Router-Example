import React, { PureComponent } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

class Logo extends PureComponent {
  render() {
    return (
      <Row>
        <Col lg={2} lgOffset={5}>
          <Image src={this.props.logo} responsive />
        </Col>
      </Row>
    );
  }
}

export default Logo;
