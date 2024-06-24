import { Row, Image, Col } from 'react-bootstrap';

const AboutView = () => {
  return (
    <section id="about" className="about">
      <Row className="about__bg bg--dark">
        <Col md={6} sm={12} className="about__img-resume">
          <div className="about__img">
            <Image
              className="about__img__img"
              src={process.env.PUBLIC_URL + '/imgs/dominic-decicco-potrait.jpg'}
              alt="Dominic DeCicco photo"
            />
          </div>
          <div className="about__resume-btn bg--gradient">
            <a
              className="resume-btn__link"
              href={process.env.PUBLIC_URL + '/Dominic_DeCicco_Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </Col>
        <Col className="about__content" md={6} sm={12}>
          <div className="section-title">
            <h2 className="section-title__text bg--gradient">ABOUT ME</h2>
          </div>
          <p className="about__description">
            Hi, I’m Dominic, a web developer excited about technology and media.
            I have strong problem-solving and research skills that allow me to
            find exceptional ways to design code and fix arising issues
            promptly. These skills have helped me greatly with the web
            applications that I have built recently. In my experience as a game
            developer, I worked well collaborating with others using AGILE
            project management methods. I’m excited to be part of a team to
            build future great web applications.
          </p>
          <ul className="about__profile">
            <li className="about__profile-item">
              <span className="about__profile-label text--primary">CITY:</span>{' '}
              New York, NY
            </li>
            <li className="about__profile-item">
              <span className="about__profile-label text--primary">PHONE:</span>{' '}
              347-697-2081
            </li>
            <li className="about__profile-item">
              <span className="about__profile-label text--primary">
                E-MAIL:
              </span>{' '}
              ddecicco330web@gmail.com
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default AboutView;
