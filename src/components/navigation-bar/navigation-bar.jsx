import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MainModalView from '../main-modal-view/main-modal-view';

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    setFadeOut(false);
  };
  const handleCloseModal = () => {
    setFadeOut(true);
  };
  const handleAnimationEnd = () => (fadeOut ? setShowModal(false) : null);

  return (
    <>
      <Navbar id="header">
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
              target="blank"
            >
              <div
                className="icon"
                style={{
                  maskImage: `url(${
                    process.env.PUBLIC_URL + '/imgs/linkedin_icon.svg'
                  })`,
                  WebkitMaskImage: `url(${
                    process.env.PUBLIC_URL + '/imgs/linkedin_icon.svg'
                  })`
                }}
              />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://github.com/ddecicco330web"
              target="blank"
            >
              <div
                className="icon"
                style={{
                  maskImage: `url(${
                    process.env.PUBLIC_URL + '/imgs/github_icon.svg'
                  })`,
                  WebkitMaskImage: `url(${
                    process.env.PUBLIC_URL + '/imgs/github_icon.svg'
                  })`
                }}
              />
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <div
              className="icon menu-icon"
              onClick={handleShowModal}
              style={{
                maskImage: `url(${
                  process.env.PUBLIC_URL + '/imgs/menu_icon.svg'
                })`,
                WebkitMaskImage: `url(${
                  process.env.PUBLIC_URL + '/imgs/menu_icon.svg'
                })`
              }}
            />
          </Nav>
        </Container>
      </Navbar>
      {showModal ? (
        <MainModalView
          fadeOut={fadeOut}
          handleClose={handleCloseModal}
          handleAnimationEnd={handleAnimationEnd}
        />
      ) : null}
    </>
  );
};

export default NavigationBar;
