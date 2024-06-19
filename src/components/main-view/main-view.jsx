import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from '../navigation-bar/navigation-bar';
import { Container } from 'react-bootstrap';
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

          {projects.map((project) => {
            return (
              <Route
                path={`/projects/${project.name}`}
                element={<CaseStudyView project={project} />}
                key={project.id}
              />
            );
          })}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
