import { Row, Image, Col } from 'react-bootstrap';
import './about-view.scss';

const AboutView = () => {
  return (
    <Row>
      <Col className="text-center" sm={8}>
        <div>
          <h1>About Me</h1>
          <p>
            Hi, I’m Dominic, a web developer excited about technology and media.
            I have strong problem-solving and research skills that allow me to
            find exceptional ways to design code and fix arising issues
            promptly. These skills have helped me greatly with the web
            applications that I have built recently. In my experience as a game
            developer, I worked well collaborating with others using AGILE
            project management methods. I’m excited to be part of a team to
            build future great web applications.
          </p>
        </div>
      </Col>
      <Col sm={4}>
        <Image
          src="imgs/dominic-decicco-potrait.jpg"
          alt="Dominic DeCicco photo"
          className="about-img"
        />
      </Col>
    </Row>
  );
};

export default AboutView;
