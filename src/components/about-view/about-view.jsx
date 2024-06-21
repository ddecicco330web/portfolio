import { Row, Image, Col } from 'react-bootstrap';

const AboutView = () => {
  return (
    <section id="about">
      <Row className="about-bg dark-bg">
        <Col md={6} sm={12} className="about-img-resume">
          <div className="about-img">
            <Image
              src={process.env.PUBLIC_URL + '/imgs/dominic-decicco-potrait.jpg'}
              alt="Dominic DeCicco photo"
            />
          </div>
          <div className="resume-btn gradient-bg">
            <a
              href={process.env.PUBLIC_URL + '/Dominic_DeCicco_Resume.pdf'}
              target="blank"
            >
              Download Resume
            </a>
          </div>
        </Col>
        <Col className="about-content" md={6} sm={12}>
          <div className="section-title">
            <h2 className="gradient-bg">ABOUT ME</h2>
          </div>
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
          <ul className="profile">
            <li>
              <span className="text-primary-color">CITY:</span> New York, NY
            </li>
            <li>
              <span className="text-primary-color">PHONE:</span> 347-697-2081
            </li>
            <li>
              <span className="text-primary-color">E-MAIL:</span>{' '}
              ddecicco330web@gmail.com
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default AboutView;
