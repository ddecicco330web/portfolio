import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavModalView from '../nav-modal-view/nav-modal-view';

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    setFadeOut(false);
  };
  const handleCloseModal = () => {
    setFadeOut(true);
  };
  const handleAnimationEnd = () => (fadeOut ? setShowModal(false) : null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY < 100 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <header>
      <Navbar id="header" variant="dark" className={isScrolled ? 'fixed' : ''}>
        <Container fluid>
          <Navbar.Brand
            className="navbar-brand"
            as={Link}
            to={process.env.PUBLIC_URL}
          >
            Dominic DeCicco
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="https://www.linkedin.com/in/dominicdecicco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <Image
                  src={process.env.PUBLIC_URL + '/imgs/linkedin_icon.svg'}
                />
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://github.com/ddecicco330web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <Image src={process.env.PUBLIC_URL + '/imgs/github_icon.svg'} />
              </div>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <div className="icon menu-icon" onClick={handleShowModal}>
              <Image
                className="w-100"
                src={process.env.PUBLIC_URL + '/imgs/menu_icon.svg'}
              />
            </div>
          </Nav>
        </Container>
      </Navbar>
      {showModal ? (
        <NavModalView
          fadeOut={fadeOut}
          handleClose={handleCloseModal}
          handleAnimationEnd={handleAnimationEnd}
        />
      ) : null}
    </header>
  );
};

export default NavigationBar;
