import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand bg="dark" variant="dark" href ="/" >
          <babel>React sample</babel>
        </Navbar.Brand>
        <Nav className="me-auto">
        
        <NavDropdown title="Root of Equations" id="nav-dropdown">
        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
        <NavDropdown.Item href="/Falseposition">Falseposition</NavDropdown.Item>
        <NavDropdown.Item href="/Onepoint">One-point</NavDropdown.Item>
        <NavDropdown.Item href="/Newton">Newton-Raphson</NavDropdown.Item>
        <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown title="Linear System" id="nav-dropdown">
        <NavDropdown.Item href="/Carmer">Carmer</NavDropdown.Item>
        
        </NavDropdown>
        
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;