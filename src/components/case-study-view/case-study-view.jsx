import { Row, Col, Image } from 'react-bootstrap';
import './case-study-view.scss';
import { Link } from 'react-router-dom';

const CaseStudyView = ({ project }) => {
  return (
    <Row>
      <Col>
        <Link to="/projects" className="custom-btn link-btn">
          {'<- Back to Projects'}
        </Link>
        <h1 className={'case-study-section appear'}>{project.name}</h1>

        <div className={'case-study-section appear'}>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>
        <div className={'w-100 case-study-img-container slide-left'}>
          <Image
            className={'w-100 case-study-section appear'}
            src={process.env.PUBLIC_URL + '/' + project.case_study_imgs[0]}
            alt="project image 1"
          />
        </div>
        <div className={'case-study-section appear'}>
          <h2>Purpose</h2>
          <p>{project.purpose}</p>
        </div>
        <div className={'case-study-section appear'}>
          <h2>Objective</h2>
          <p>{project.objective}</p>
        </div>
        <div className={'w-100 case-study-img-container slide-left'}>
          <Image
            className={'w-100 case-study-section appear'}
            src={process.env.PUBLIC_URL + '/' + project.case_study_imgs[1]}
            alt="project image 2"
          />
        </div>
        <div className={'case-study-section appear'}>
          {project.approach.map((section) => {
            return (
              <div key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul>
                  {section.steps.map((step) => {
                    return <li key={step}>{step}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={'w-100 case-study-img-container slide-left'}>
          <Image
            className={'w-100 case-study-section appear'}
            src={process.env.PUBLIC_URL + '/' + project.case_study_imgs[2]}
            alt="project image 3"
          />
        </div>
        <div className={'case-study-section appear'}>
          <h2>Challenges</h2>
          <p>{project.challenges}</p>
        </div>
        <div className={'case-study-section appear'}>
          <h2>Improvements</h2>
          <p>{project.improvements}</p>
        </div>
        <div className={'case-study-section appear'}>
          <h2>Final Thoughts</h2>
          <p>{project.conclusion}</p>
        </div>
      </Col>
    </Row>
  );
};

export default CaseStudyView;
