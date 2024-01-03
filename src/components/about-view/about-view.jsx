import { Row, Image, Col } from 'react-bootstrap';
import './about-view.scss';

const AboutView = () => {
  return (
    <Row>
      <Col className="text-center" sm={8}>
        <div className="about-text-container">
          <div className="container-size">
            <h1 className="pb-2">About Me</h1>
            <h2 className="pb-2">
              Hi, I’m Dominic, a web developer excited about technology and
              media.
            </h2>
            <p>
              I have strong problem-solving and research skills that allow me to
              find exceptional ways to design code and fix arising issues
              promptly. These skills have helped me greatly with the web
              applications that I have built recently. In my experience as a
              game developer, I worked well collaborating with others using
              AGILE project management methods. I’m excited to be part of a team
              to build future great web applications.
            </p>
          </div>
        </div>
      </Col>
      <Col sm={4}>
        <div className="about-img-container">
          <Image
            src={process.env.PUBLIC_URL + '/imgs/dominic-decicco-potrait.jpg'}
            alt="Dominic DeCicco photo"
          />
        </div>
      </Col>
    </Row>
  );
};

export default AboutView;
