import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCardView = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Img
        src={process.env.PUBLIC_URL + project.image}
        alt={project.name}
        className="project-card-img"
      />
      <div className="project-overlay w-100 h-100">
        <div className="project-overlay-content">
          <div className="project-links">
            <Link
              to={project.gh_link}
              target="_blank"
              className="project-link"
              rel="noopener noreferrer"
            >
              <div className="icon-container ">
                <div className="icon github-icon primary-bg" />
              </div>
            </Link>
            {project.live_link && (
              <Link
                to={project.live_link}
                target="_blank"
                className="project-link"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <div className="icon link-icon primary-bg" />
                </div>
              </Link>
            )}
          </div>
          <div className="project-text">
            <h4>{project.name}</h4>
            <p>
              {project.skills.map((skill, index) => (
                <span key={index} className="text-primary-color">
                  {skill}
                  {index < project.skills.length - 1 && ','}{' '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCardView;
