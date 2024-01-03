import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <NavigationBar key="nav" />
      <Container className="page-content">
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<AboutView />} />

          <Route
            path={process.env.PUBLIC_URL + '/about'}
            element={<AboutView />}
          />

          <Route
            path={process.env.PUBLIC_URL + '/projects'}
            element={<ProjectsView projects={projects} />}
          />

          <Route
            path={process.env.PUBLIC_URL + '/contact'}
            element={<ContactView />}
          />
          {projects.map((project) => {
            return (
              <Route
                path={`${process.env.PUBLIC_URL}/projects/${project.name}`}
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
