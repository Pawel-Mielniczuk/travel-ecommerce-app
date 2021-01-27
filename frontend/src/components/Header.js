import React from 'react'
import { Navbar, Nav, Container }  from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
  <Navbar.Brand href="#/">Travel shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#cart"><span className='fas fa-shopping-cart'></span> Cart</Nav.Link>
      <Nav.Link href="#login"><span className='fas fa-user'></span> Sign-in</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
};

export default Header;
