import React, { PureComponent } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

/**
  This component is responsible for showing the __Navbar__ component.

  __Notes:__  
    - This component is rendered ONLY for authenticated users

  __Example usage:__  
  `<Header {...props} />`
*/

class Header extends PureComponent {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Bootstrap</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to='/'>
              <NavItem eventKey={1}> Home </NavItem>
            </IndexLinkContainer>

            <LinkContainer to='/dashboard'>
              <NavItem eventKey={2}> Dashboard </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to='/logout'>
              <NavItem eventKey={3}> Logout </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
