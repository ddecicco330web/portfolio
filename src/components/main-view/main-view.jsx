import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from '../navigation-bar/navigation-bar';
import AboutView from '../about-view/about-view';
import { Container } from 'react-bootstrap';
import ContactView from '../contact-view/contact-view';
import ProjectsView from '../projects-view/projects-view';
import projects from '../../project-data';
import CaseStudyView from '../case-study-view/case-study-view';
import HomeView from '../home-view/home-view';

const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container fluid className="p-0">
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<HomeView />} />

          <Route path={'/about'} element={<AboutView />} />

          {projects.map((project) => {
            return (
              <Route
                path={`/projects/${project.name}`}
                element={<CaseStudyView project={project} />}
                key={project.id}
              />
            );
          })}

          <Route
            path={'/projects'}
            element={<ProjectsView projects={projects} />}
          />

          <Route path={'/contact'} element={<ContactView />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
