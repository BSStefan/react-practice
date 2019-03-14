// @flow
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const Navigation = (props: {}) => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect={true}>
      <IndexLinkContainer to="/" exact={true}>
        <Navbar.Brand href="/">Movie Db</Navbar.Brand>
      </IndexLinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/popular" exact={true}>
            <Nav.Link active={false} >Popular</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;