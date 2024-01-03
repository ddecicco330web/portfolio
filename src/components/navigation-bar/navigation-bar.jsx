import { Container, Nav, Navbar } from 'react-bootstrap';
import './navigation-bar.scss';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand
          className="custom-btn"
          as={Link}
          to={process.env.PUBLIC_URL}
        >
          Dominic DeCicco
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              className="custom-btn"
              as={Link}
              to={process.env.PUBLIC_URL + '/about'}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="custom-btn"
              as={Link}
              to={process.env.PUBLIC_URL + '/projects'}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="custom-btn"
              as={Link}
              to={process.env.PUBLIC_URL + '/contact'}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
