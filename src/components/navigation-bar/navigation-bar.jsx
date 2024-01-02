import { Collapse, Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './navigation-bar.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="custom-btn" href="/">
          Dominic DeCicco
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="custom-btn" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="custom-btn" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="custom-btn" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
