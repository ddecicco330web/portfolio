import { Row, Col } from 'react-bootstrap';
import projects from '../../project-data';
import ProjectCardView from '../project-card-view/project-card-view.jsx';

const ProjectsView = () => {
  return (
    <section id="projects">
      <Row className="projects-title-bg dark-bg">
        <Col>
          <div className="section-title">
            <h2 className="gradient-bg">Projects</h2>
          </div>
        </Col>
      </Row>
      <Row className="projects-content gradient-bg">
        {projects.map((project) => {
          return (
            <Col
              xs={12}
              md={4}
              className="mb-4 d-flex justify-content-center"
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
