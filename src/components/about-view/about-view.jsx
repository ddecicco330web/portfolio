import { Row, Image, Col } from 'react-bootstrap';

const AboutView = () => {
  return (
    <section id="about">
      <div className="about-bg">
        <Row>
          <Col md={6} sm={12}>
            <div className="about-img-resume">
              <div className="about-img">
                <Image
                  src={
                    process.env.PUBLIC_URL + '/imgs/dominic-decicco-potrait.jpg'
                  }
                  alt="Dominic DeCicco photo"
                />
              </div>
              <div className="resume-btn">
                <a
                  href={process.env.PUBLIC_URL + '/Dominic_DeCicco_Resume.pdf'}
                  target="blank"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </Col>
          <Col className="text-center" md={6} xs={12}>
            <div className="about-content">
              <div className="section-title">
                <h2>ABOUT ME</h2>
              </div>
              <p>
                Hi, I’m Dominic, a web developer excited about technology and
                media. I have strong problem-solving and research skills that
                allow me to find exceptional ways to design code and fix arising
                issues promptly. These skills have helped me greatly with the
                web applications that I have built recently. In my experience as
                a game developer, I worked well collaborating with others using
                AGILE project management methods. I’m excited to be part of a
                team to build future great web applications.
              </p>
              <ul className="profile">
                <li>
                  <span>CITY:</span> New York, NY
                </li>
                <li>
                  <span>PHONE:</span> 347-697-2081
                </li>
                <li>
                  <span>E-MAIL:</span> ddecicco330web@gmail.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutView;
