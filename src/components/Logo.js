import React, { PureComponent } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

/**
  This component is responsible for showing the company's logo as an Image

  __Example usage:__
  `<Logo logo={image-path} />`
*/

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
