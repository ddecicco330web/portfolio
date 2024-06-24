import { Row, Col } from 'react-bootstrap';

const IntroView = () => {
  return (
    <section id="intro" className="intro">
      <Row className="h-100vh w-100 d-flex align-items-center intro__bg">
        <Col className="intro__content">
          <h1 className="intro__title">Hello!</h1>
          <h3 className="intro__subtitle">
            <span className="intro__subtitle-prefix">I'm</span> Dominic DeCicco
          </h3>
          <p className="intro__description">Fullstack Developer</p>
        </Col>
      </Row>
    </section>
  );
};

export default IntroView;
