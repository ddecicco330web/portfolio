import { Row, Col } from 'react-bootstrap';

const IntroView = () => {
  return (
    <section id="intro">
      <Row className="h-100vh w-100 d-flex align-items-center intro-bg">
        <Col className="intro-content">
          <h1>Hello!</h1>
          <h3>
            <span>I'm</span> Dominic DeCicco
          </h3>
          <p>Fullstack Developer</p>
        </Col>
      </Row>
    </section>
  );
};

export default IntroView;
