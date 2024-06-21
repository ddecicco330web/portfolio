import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from '../navigation-bar/navigation-bar';
import { Container } from 'react-bootstrap';
import HomeView from '../home-view/home-view';

const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container fluid className="p-0">
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<HomeView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
