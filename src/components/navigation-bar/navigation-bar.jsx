import { Container, Nav, Navbar } from 'react-bootstrap';
import './navigation-bar.scss';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">Dominic DeCicco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
