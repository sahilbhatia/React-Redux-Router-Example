import React, { PureComponent } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

/**
  This component is responsible for showing the company's logo as a responsive Image.

  __Example usage:__  
  `<Logo logo={replace-me-with-image-path} />`
*/

class Logo extends PureComponent {
  static propTypes = {
    /** Expected value of _logo_ is path to the image which needs to be displayed */
    logo: React.PropTypes.string.isRequired
  }

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
