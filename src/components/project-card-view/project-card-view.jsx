import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCardView = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Img
        src={process.env.PUBLIC_URL + project.image}
        alt={project.name}
        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
      />
      <div className="project-overlay w-100 h-100">
        <div className="project-overlay-content">
          <div className="project-links">
            <Link to={project.gh_link} target="blank" className="project-link">
              <div className="icon-container ">
                <div
                  className="icon primary-bg"
                  style={{
                    maskImage: `url(${process.env.PUBLIC_URL}/imgs/github_icon.svg)`,
                    WebkitMaskImage: `url(${process.env.PUBLIC_URL}/imgs/github_icon.svg)`,
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover'
                  }}
                />
              </div>
            </Link>
            {project.live_link ? (
              <Link
                to={project.live_link}
                target="blank"
                className="project-link"
              >
                <div className="icon-container">
                  <div
                    className="icon primary-bg"
                    style={{
                      maskImage: `url(${process.env.PUBLIC_URL}/imgs/link_chain_icon.svg)`,
                      WebkitMaskImage: `url(${process.env.PUBLIC_URL}/imgs/link_chain_icon.svg)`,
                      WebkitMaskSize: 'cover',
                      maskSize: 'cover'
                    }}
                  />
                </div>
              </Link>
            ) : null}
          </div>
          <div className="project-text">
            <h4>{project.name}</h4>
            <p>
              {project.skills.map((skill, index) => (
                <span key={index} className="text-primary-color">
                  {skill}
                  {index < project.skills.length - 1 ? ',' : null}{' '}
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
