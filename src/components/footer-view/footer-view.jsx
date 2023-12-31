import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './footer-view.scss';

const FooterView = () => {
  return (
    <Container className="fixed-bottom footer-container">
      <Row>
        <Col className="text-center">
          <Button
            href="Dominic_DeCicco_Resume.pdf"
            target="blank"
            className="resume-btn"
          >
            My Resume
          </Button>
        </Col>
      </Row>
      <Row className="mb-1">
        <Col className="d-flex justify-content-center">
          <a href="https://github.com/ddecicco330web" target="blank">
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
          </a>
          <a href="https://www.linkedin.com/in/dominicdecicco/" target="blank">
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
          </a>
          <a href="https://twitter.com/decicco330" target="blank">
            <div
              className="icon"
              style={{
                maskImage: `url(${
                  process.env.PUBLIC_URL + '/imgs/twitter_icon.svg'
                })`,
                WebkitMaskImage: `url(${
                  process.env.PUBLIC_URL + '/imgs/twitter_icon.svg'
                })`
              }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterView;
