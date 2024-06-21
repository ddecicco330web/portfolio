import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from '../navigation-bar/navigation-bar';
import HomeView from '../home-view/home-view';

const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
