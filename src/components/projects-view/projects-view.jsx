import { Row, Col, Card, Badge, Modal, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './projects-view.scss';

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center flex-column">
        {props.project.image_position === 'vertical' ? (
          <Image className="img-vertical" src={props.project.image} />
        ) : (
          <Image className="w-100" src={props.project.image} />
        )}

        <h4 className="mt-3">Description</h4>
        <p>{props.project.description}</p>

        <h4 className="mt-3">Technologies</h4>

        <div>
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
        <Link to={'/projects/' + props.project.name} className="me-1">
          More Info
        </Link>
        <Link to={props.project.gh_link} target="blank" className="me-1">
          Github
        </Link>
        {props.project.live_link ? (
          <Link to={props.project.live_link} target="blank">
            Website
          </Link>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
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
    >
      {props.project.image_position === 'vertical' ? (
        <Card.Img
          className="img-vertical"
          src={props.project.image}
          alt={props.project.name}
        />
      ) : (
        <Card.Img src={props.project.image} alt={props.project.name} />
      )}

      <Card.ImgOverlay className="d-flex flex-column justify-content-end ">
        <div className="text-container justify-content-end d-flex flex-column ps-4 pe-4 pb-4">
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
    <div>
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>

      <Row>
        {projects.map((project) => {
          return (
            <Col sm={12} lg={6} className="mb-4" key={project.id}>
              <ProjectCardView
                project={project}
                setModalShow={setModalShow}
                setProject={setProject}
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
