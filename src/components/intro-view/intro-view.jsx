import { Row, Col } from 'react-bootstrap';

const IntroView = () => {
  return (
    <section id="intro">
      <Row
        className="h-100vh w-100 d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(
                to right,
                rgba(23, 211, 151, 0.8), rgba(7, 247, 247, 0.8)
              ),
          url(${process.env.PUBLIC_URL + '/imgs/home-img.jpg'})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
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
