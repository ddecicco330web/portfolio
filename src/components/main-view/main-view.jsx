import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import NavigationBar from '../navigation-bar/navigation-bar';
import AboutView from '../about-view/about-view';
import { Container, Image } from 'react-bootstrap';
import FooterView from '../footer-view/footer-view';
import './main-view.scss';
import ContactView from '../contact-view/contact-view';

const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Container className="page-content">
        <Routes>
          <Route path="/" element={<AboutView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </Container>

      <FooterView />
    </BrowserRouter>
  );
};

export default MainView;
