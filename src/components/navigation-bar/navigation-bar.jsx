import { Container, Nav, Navbar } from 'react-bootstrap';
import './navigation-bar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} expand="md" variant="dark">
      <Container>
        <Navbar.Brand
          className="custom-btn"
          as={Link}
          to={process.env.PUBLIC_URL}
        >
          Dominic DeCicco
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" w-100 d-flex justify-content-end">
            <Link
              className="nav-link custom-btn"
              to={process.env.PUBLIC_URL + '/about'}
              onClick={() => setExpanded(false)}
            >
              About
            </Link>
            <Link
              className="nav-link custom-btn"
              to={process.env.PUBLIC_URL + '/projects'}
              onClick={() => setExpanded(false)}
            >
              Projects
            </Link>
            <Link
              className="nav-link custom-btn"
              to={process.env.PUBLIC_URL + '/contact'}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
