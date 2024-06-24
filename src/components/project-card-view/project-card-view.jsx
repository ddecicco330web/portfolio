import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCardView = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Img
        src={process.env.PUBLIC_URL + project.image}
        alt={project.name}
        className="project-card__img"
      />
      <div className="project-overlay w-100 h-100">
        <div className="project-overlay__content">
          <div className="project__links">
            <Link
              to={project.gh_link}
              target="_blank"
              className="project__link"
              rel="noopener noreferrer"
            >
              <div className="icon-container">
                <div className="icon icon--github bg--primary" />
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
                  <div className="icon icon--link bg--primary" />
                </div>
              </Link>
            )}
          </div>
          <div className="project__info">
            <h4 className="project__name">{project.name}</h4>
            <p className="project__skills">
              {project.skills.map((skill, index) => (
                <span key={index} className="project__skill text--primary">
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
