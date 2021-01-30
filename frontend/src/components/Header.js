//React
import React from 'react'
//Bootstrap
import { Navbar, Nav, Container }  from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
      <LinkContainer to='/'>
        <Navbar.Brand href="#/">Travel shop</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to='/cart'>
          <Nav.Link >
            <span className='fas fa-shopping-cart'></span> Cart
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to='login'>
          <Nav.Link>
            <span className='fas fa-user'></span> Sign-in
          </Nav.Link>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
};

export default Header;
