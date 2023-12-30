import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './footer-view.scss';

const FooterView = () => {
  return (
    <Container className="fixed-bottom">
      <Row className="mb-1">
        <Col className="text-center">
          <a href="https://github.com/ddecicco330web" target="blank">
            <Image
              className="icon"
              src="imgs/github_icon.svg"
              alt="github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/dominicdecicco/" target="blank">
            <Image
              className="icon"
              src="imgs/linkedin_icon.svg"
              alt="linkedin icon"
            />
          </a>
          <a href="https://twitter.com/decicco330" target="blank">
            <Image
              className="icon"
              src="imgs/twitter_icon.svg"
              alt="twitter icon"
            />
          </a>
          <a href="https://medium.com/@ddecicco330" target="blank">
            <Image
              className="icon"
              src="imgs/medium_logo.png"
              alt="medium icon"
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            href="Dominic_DeCicco_Resume.pdf"
            target="blank"
            variant="outline-dark"
            className="resume-btn"
          >
            My Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterView;
