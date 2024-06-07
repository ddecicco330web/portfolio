import { Row, Col, Card, Badge, Modal, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>{props.project.name}</h1>
        </Modal.Title>
        <button
          className="custom-btn close-btn link-btn"
          onClick={() => {
            props.onHide();
          }}
        >
          X
        </button>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center flex-column">
        {props.project.image_position === 'vertical' ? (
          <Image
            className="img-vertical"
            src={process.env.PUBLIC_URL + '/' + props.project.image}
          />
        ) : (
          <Image
            className="w-100"
            src={process.env.PUBLIC_URL + '/' + props.project.image}
          />
        )}

        <h2 className="mt-3">Description</h2>
        <p>{props.project.description}</p>

        <h2 className="mt-3">Technologies</h2>

        <div className="mb-5">
          {props.project.skills
            ? props.project.skills.map((skill) => {
                return (
                  <Badge pill bg="secondary" className="me-1">
                    {skill}
                  </Badge>
                );
              })
            : null}
        </div>
        <div className="d-flex justify-content-center">
          {props.project.case_study ? (
            <Link
              to={process.env.PUBLIC_URL + '/projects/' + props.project.name}
              className="me-5 custom-btn link-btn"
            >
              More Info
            </Link>
          ) : null}
          <Link
            to={props.project.gh_link}
            target="blank"
            className="me-5 custom-btn link-btn"
          >
            Github
          </Link>
          {props.project.live_link ? (
            <Link
              to={props.project.live_link}
              target="blank"
              className="custom-btn link-btn"
            >
              Website
            </Link>
          ) : null}
        </div>
      </Modal.Body>
    </Modal>
  );
};

const ProjectCardView = (props) => {
  return (
    <Card
      onClick={() => {
        props.setModalShow(true);
        props.setProject(props.project);
      }}
      style={{ max_height: '400px' }}
      className={props.className}
    >
      {props.project.image_position === 'vertical' ? (
        <Card.Img
          className="img-vertical"
          src={process.env.PUBLIC_URL + '/' + props.project.image}
          alt={props.project.name}
        />
      ) : (
        <Card.Img
          src={process.env.PUBLIC_URL + '/' + props.project.image}
          alt={props.project.name}
        />
      )}

      <Card.ImgOverlay className="d-flex flex-column justify-content-end ">
        <div className="proj-text-container justify-content-end d-flex flex-column ps-4 pe-4 pb-4">
          <Card.Title>{props.project.name}</Card.Title>
          <Card.Text>{props.project.short_description}</Card.Text>
          <div>
            {props.project.skills
              ? props.project.skills.map((skill) => {
                  return (
                    <Badge pill bg="secondary" className="me-1" key={skill}>
                      {skill}
                    </Badge>
                  );
                })
              : null}
          </div>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

const ProjectsView = ({ projects }) => {
  const [modalShow, setModalShow] = useState(false);
  const [project, setProject] = useState({});
  return (
    <div className="projects-container">
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>

      <Row>
        {projects.map((project) => {
          const className = project.id % 2 === 0 ? 'card-right' : 'card-left';
          return (
            <Col sm={12} lg={6} className="mb-4" key={project.id}>
              <ProjectCardView
                project={project}
                setModalShow={setModalShow}
                setProject={setProject}
                className={className}
              />
            </Col>
          );
        })}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={project}
      />
    </div>
  );
};

export default ProjectsView;
