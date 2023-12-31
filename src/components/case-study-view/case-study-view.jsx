import { Row, Col, Image } from 'react-bootstrap';

const CaseStudyView = ({ project }) => {
  return (
    <Row>
      <Col>
        <h1>{project.name}</h1>
        <div>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>
        <div className="w-100">
          <Image
            className="w-100"
            src={process.env.PUBLIC_URL + '/' + project.case_study_imgs[0]}
            alt="project image 1"
          />
        </div>
        <div>
          <h2>Purpose</h2>
          <p>{project.purpose}</p>
        </div>
        <div>
          <h2>Objective</h2>
          <p>{project.objective}</p>
        </div>
        <div className="w-100">
          <Image
            className="w-100"
            src={process.env.PUBLIC_URL + '/' + project.case_study_imgs[1]}
            alt="project image 2"
          />
        </div>
        <div>
          {project.approach.map((section) => {
            return (
              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul>
                  {section.steps.map((step) => {
                    return <li>{step}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="w-100">
          <Image
            className="w-100"
            src={process.env.PUBLIC_URL + '/' + project.case_study_imgs[2]}
            alt="project image 3"
          />
        </div>
        <div>
          <h2>Challenges</h2>
          <p>{project.challenges}</p>
        </div>
        <div>
          <h2>Improvements</h2>
          <p>{project.improvements}</p>
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>{project.conclusion}</p>
        </div>
      </Col>
    </Row>
  );
};

export default CaseStudyView;
