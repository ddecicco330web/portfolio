import { Row, Col } from 'react-bootstrap';
import projects from '../../project-data';
import ProjectCardView from '../project-card-view/project-card-view.jsx';

const ProjectsView = () => {
  return (
    <section id="projects" className="projects">
      <Row className="projects__title-bg bg--dark">
        <Col className="projects__title-col">
          <div className="section-title">
            <h2 className="section-title__text bg--gradient">PROJECTS</h2>
          </div>
        </Col>
      </Row>
      <Row className="projects__content bg--gradient">
        {projects.map((project) => {
          return (
            <Col
              xs={12}
              md={4}
              className="projects__card-col mb-4 d-flex justify-content-center"
              key={project.id}
            >
              <ProjectCardView project={project} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default ProjectsView;
