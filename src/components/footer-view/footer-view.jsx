import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterView = () => {
  return (
    <Container className="fixed-bottom footer-container">
      <Row>
        <Col className="text-center">
          <Link
            to={process.env.PUBLIC_URL + '/Dominic_DeCicco_Resume.pdf'}
            target="blank"
            className="resume-btn custom-btn"
          >
            My Resume
          </Link>
        </Col>
      </Row>
      <Row className="mb-1">
        <Col className="d-flex justify-content-center">
          <a
            className="icon-parent"
            href="https://github.com/ddecicco330web"
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
          </a>
          <a
            className="icon-parent"
            href="https://www.linkedin.com/in/dominicdecicco/"
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
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterView;
