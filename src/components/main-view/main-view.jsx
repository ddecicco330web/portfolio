import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import NavigationBar from '../navigation-bar/navigation-bar';
import AboutView from '../about-view/about-view';
import { Container } from 'react-bootstrap';
import FooterView from '../footer-view/footer-view';
import './main-view.scss';
import ContactView from '../contact-view/contact-view';
import ProjectsView from '../projects-view/projects-view';
import projects from '../../project-data';
import CaseStudyView from '../case-study-view/case-study-view';

const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Container className="page-content">
        <Routes>
          <Route path="/" element={<AboutView />} />
          <Route path="/about" element={<AboutView />} />
          <Route
            path="/projects"
            element={<ProjectsView projects={projects} />}
          />
          <Route path="/contact" element={<ContactView />} />
          {projects.map((project) => {
            return (
              <Route
                path={`/projects/${project.name}`}
                element={<CaseStudyView project={project} />}
                key={project.id}
              />
            );
          })}
        </Routes>
      </Container>

      <FooterView />
    </BrowserRouter>
  );
};

export default MainView;
